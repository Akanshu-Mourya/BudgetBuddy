import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const isAuthenticated = (req, res, next) => {
    try {
        // Extract token from Authorization header
        let authHeader = req.headers.authorization;

        console.log("Authenticated Token:", authHeader);

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                message: "Access denied. No token provided.",
                success: false,
            });
        }

        // Remove "Bearer " prefix and get actual token
        const token = authHeader.split(" ")[1];

        // Verify JWT token
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if (err) {
                console.error("🔴 Token verification failed:", err.message);
                return res.status(403).json({
                    message: err.name === "TokenExpiredError"
                        ? "Session expired. Please log in again."
                        : "Invalid token.",
                    success: false,
                });
            }

            req.userId = decoded.userId; // Attach userId to request object
            next();
        });
    } catch (error) {
        console.error("🔴 Authentication middleware error:", error.message);
        return res.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

export default isAuthenticated;
