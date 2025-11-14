const mongoose=require("mongoose");

const connectToMongoDB=async()=>{
    try{
        await mongoose.connect("mongodb+srv://manya:m1a2n3y4a5@cluster0.byoqk0o.mongodb.net/?appName=Cluster0/ChatApp");
        console.log("connected to mongodb");
    }
    catch(error){
        console.log("Error connecting to MongoDB",error.message);
    }

}

module.exports={connectToMongoDB}