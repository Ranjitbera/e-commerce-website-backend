import mongoose from 'mongoose';

const PurchaseSchema = new mongoose.Schema({
    price:{type: Number, required:true},
    category:{type:String, required:true},
   
},{ timestamps: true }) 
export const PurchaseModel = mongoose.model('Perchase', PurchaseSchema);

export const purchaseHistory = (data : Record<string,any>) => new PurchaseModel(data).save();

export const getPurchaseHistory = ()=> PurchaseModel.find();