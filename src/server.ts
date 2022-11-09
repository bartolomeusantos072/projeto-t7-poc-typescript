import app from './app'
import dotenv from "dotenv";
dotenv.config({path:".env"});


const PORT = Number(process.env.PORT)|| 4000;
app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`);
})