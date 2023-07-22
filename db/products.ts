import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    price:{type: Number, required:true},
    category:{type:String, required:true}
}) 
export const ProductModel = mongoose.model('Product', ProductSchema);

export const newAddedProduct = (data : Record<string,any>) => new ProductModel(data).save();

export const getProduct = ()=> ProductModel.find();