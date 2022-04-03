import mongoose from "mongoose";
import dotenv from "dotenv"

const Connection = async()=>{
    try {
        dotenv.config();
        const URL =  process.env.DB_URL;
        await mongoose.connect(URL,{useNewUrlParser:true});
        console.log("Database connected successfully!");
    } catch (error) {
        console.log("Error while connection to database", error);
    }
  
}

export default Connection;