import mongoose from "mongoose";
const Schema = mongoose.Schema

const UserModel = new Schema(
    {
        email:{type:String, require:true},
        password:{type:String},
       
       
    },
    {timestamps:true, versionKey:false}
)

const User = mongoose.model("user", UserModel)
export default User