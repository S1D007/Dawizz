import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
        console.log('Connected to MongoDB');
    } catch (error: any) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectToMongoDB;