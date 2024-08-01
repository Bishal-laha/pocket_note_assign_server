import dotenv from "dotenv";
import connectDB from "./db/db.js";
import { app } from "./app.js";

dotenv.config({path:"../.env"});

connectDB()
        .then(
            ()=>app.listen(process.env.PORT || 8000, ()=>{console.log(`SERVER IS RUNNING ON ${process.env.PORT}`)}))
        .catch((error)=>console.log(`DATABASE ERROR : ${error}`))