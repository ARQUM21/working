import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();


export const dbConnection = async () => {
    try{
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Database Connected')
    }catch(error){
        console.error('Error connecting to Mongodb:',error.message);
}

}    