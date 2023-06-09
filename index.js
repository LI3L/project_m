import express from 'express';
import action from './controller/action.js';
import dotenv from "dotenv";
import database from "./moudels/database.js";
dotenv.config();

const app =express();

app.set("view engine","ejs");
app.set("views","views");
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/",action);

database
.sync()
.then(result=>{
    //console.log(result);
    app.listen(process.env.PORT,()=>
    console.log(`Server running on port ${process.env.PORT}`));
})
.catch(err=>console.log(err));
