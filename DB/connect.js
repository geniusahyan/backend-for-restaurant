import mongoose from "mongoose";
import 'dotenv/config';

const url = process.env.databaseUrl;

const dbconnect = async ()=>{
    try {
        await mongoose.connect(url, {useUnifiedTopology:true});
        console.log('connected to database');
    } catch (error) {
        console.log("connection failed", error);
    }
}

export default dbconnect;