import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from "./utils/db.js";
import userRoutes from "./routes/user.routes.js";
import incomeRoutes from "./routes/income.routes.js";
import expenseRoutes from "./routes/expense.routes.js";
import borrowRoutes from "./routes/borrow.routes.js";
import cors from 'cors';

// Load environment variables
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
}
app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;


// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
app.use('/api/user', userRoutes);
app.use('/api/income', incomeRoutes);
app.use('/api/expense', expenseRoutes);
app.use('/api/borrow', borrowRoutes);
app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});