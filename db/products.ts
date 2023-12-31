import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    price:{type: Number, required:true},
    category:{type:String, required:true},
    quantity:{type:Number, default:0}
}) 
export const ProductModel = mongoose.model('Product', ProductSchema);

export const newAddedProduct = (data : Record<string,any>) => new ProductModel(data).save();

export const getProduct = ()=> ProductModel.find();