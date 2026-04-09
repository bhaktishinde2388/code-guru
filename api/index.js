import express from "express"

const app = express();
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
      suceess:true,
      message:"root point"
    })
})

const PORT = 5000;

app.listen(PORT,()=>{
    console.log(`sever run on  ${PORT}`);
})