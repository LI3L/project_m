import express from 'express';
import action from './action.js';

const app =express();

app.set("view engine","ejs");
app.set("views","views");

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use("/api",action);

const port=3101;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});