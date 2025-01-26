import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './config/db.js';

dotenv.config();

const app = express();


app.use(express.json());
app.use(cors());



app.get('/', (req,res) =>{
    res.status(200).json({message: "API is Running"})
})




dbConnection();
const PORT = process.env.PORT || 6767
app.listen(PORT, () => {
   console.log('Server is running on port', PORT)
})