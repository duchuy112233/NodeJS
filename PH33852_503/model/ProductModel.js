import mongoose from "mongoose";
const Schema = mongoose.Schema

const ProductModel = new Schema(
    {
        title:{type:String, require:true},
        price:{type:Number},
        note:{type:String},
        img:{type:String},
       
    },
    {timestamps:true, versionKey:false}
)

const Product = mongoose.model("product", ProductModel)
export default Product