import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';

import postRoutes from "./routes/posts.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());


app.use('/posts',postRoutes, (req, res) => {
    res.send('Posts');
});

app.get('/', (req, res)=>{
    res.send("Weclome to my Portfolio");
})




const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));

mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT, ()=>console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch(err=>console.log(`${err} Error connecting to database`));
