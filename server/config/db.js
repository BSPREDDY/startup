const mongoose = require("mongoose");

const connectDB = async () => {
    try {

        const uri = process.env.MONGODB_URI || process.env.MONGO_URI;
        if (!uri) {
            console.warn("MongoDB URI is not set in environment variables!");
        }
        await mongoose.connect(uri);

        console.log(
            "MongoDB Connected Successfully"
        );

    } catch (error) {
        console.error("MongoDB Connection Error:", error.message);
        // Do not process.exit(1) in serverless environments
        // Just let it log the error, or throw if you want the function to crash cleanly
    }
};

module.exports = connectDB;