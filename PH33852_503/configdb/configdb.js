import mongoose from "mongoose";
async function configDB(dbURL){
try {
    await mongoose.connect(dbURL)
    console.log("Successfull !!")
} catch (error) {
    console.log("False !!")
}
}

export default configDB