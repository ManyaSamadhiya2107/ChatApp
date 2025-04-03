const mongoose=require("mongoose");

const connectToMongoDB=async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/chatapp");
        console.log("connected to mongodb");
    }
    catch(error){
        console.log("Error connecting to MongoDB",error.message);
    }

}

module.exports={connectToMongoDB}