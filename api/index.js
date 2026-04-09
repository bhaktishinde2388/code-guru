import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
      suceess:true,
      message:"root point"
    })
})

const connectDB = async()=>{
    try{
        const conn = await mongoose .connect(process.env.MONGO_URI)
        if(conn)
        {
            console.log("mongodb connected successfully")
        }
    }catch(error){
        console.log(error)
    }
}

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`sever run on  ${PORT}`);
    connectDB();
})