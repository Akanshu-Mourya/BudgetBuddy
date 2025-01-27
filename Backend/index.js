import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.routes.js";
import incomeRoutes from "./routes/income.routes.js";
import cors from 'cors';

// Load environment variables
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    credentials: true,
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
app.use('/api/user', userRoutes);
app.use('/api/income', incomeRoutes);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});