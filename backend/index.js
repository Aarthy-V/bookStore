import express from "express";
import {PORT, mongoDBURL} from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import bookRoute from "./routes/bookRoute.js";
import cors from 'cors';

const app=express();

app.use(express.json());

app.get('/', (request, response)=>{
    console.log(request);
    return response.status(234).send('Welcome');
})
//CORS policy
app.use(cors());
app.use('/books', bookRoute);
// mongoose
mongoose
    .connect(mongoDBURL)
    .then(()=>{
        console.log('App connected to database');
        app.listen(PORT, ()=>{
            console.log(`App is listening to port: ${PORT}`);
        })
    })
    .catch((error)=> {
        console.log(error);
    })