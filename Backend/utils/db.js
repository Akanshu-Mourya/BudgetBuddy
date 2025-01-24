import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        let URL = process.env.MONGO_URL
        await mongoose.connect(URL);
        console.log('mongodb connected successfully');

    } catch (error) {
        console.log(error);

    }
}

export default connectDB;