import express from 'express';
import https from 'https';
import bodyParser from 'body-parser';
import compression from 'compression';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();




const app = express();
app.use(compression);
app.use(bodyParser);

const connect = ()=>{
    mongoose.connect(process.env.DATABASE
        ).then(()=>{
            console.log("connected to database succesfully")
        })
        .catch((err)=>{
           console.log(err.message)
        })
    }
connect();

const server = https.createServer(app);


server.listen(8080,()=>{
    console.log("server running on port 8080");
})