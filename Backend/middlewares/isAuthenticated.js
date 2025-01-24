import jwt from "jsonwebtoken";

const isAuthenticated = (req, resp, next) => {
    try {
        const token = req.cookies.token;
        
        if (!token) {
            return resp.status(401).json({
                message: "User not authenticated",
                success: false,
            });
        }

        const decode = jwt.verify(token, process.env.SECRET_KEY);  

        if (!decode) {
            return resp.status(401).json({
                message: "Invalid token",
                success: false
            });
        }

        req.userId = decode.userId;

        next();
        
    } catch (error) {
        console.error("Authentication error:", error);  
        return resp.status(500).json({
            message: "Internal server error",
            success: false,
        });
    }
};

export default isAuthenticated;
