import mongoose  from "mongoose";
async function configDB(dbURL){
    try {
        await mongoose.connect(dbURL)
        console.log("successfull !!!")
    } catch (error) {
        console.log("Failure !!!")
    }
}
export default configDB