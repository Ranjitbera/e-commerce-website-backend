import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import { getProduct, newAddedProduct } from '../db/products'


dotenv.config();

const PORT:Number = 8080;

const app: express.Application = express();
app.use(cors());

app.use(bodyParser.json());


app.post('/',async (req:Request,res:Response)=>{
   const {price,category} = req.body;
   try{
    const newProduct = await newAddedProduct({
        price,
        category
    })
    return res.status(201).send("New Product added Successfully").end();
   }catch(e){
    return res.status(400).send("error").end();
   }

})

app.get('/',async (req:Request,res:Response)=>{
    try{
     const allproduct = await getProduct()
     return res.status(201).send(allproduct).end();
    }catch(e){
     return res.status(400).send("error").end();
    }
 
 })

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




app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})
