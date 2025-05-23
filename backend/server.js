const express=require("express");//npm run server
const authRoutes=require("./routes/authRoutes");
const messageRoutes=require("./routes/messageRoutes");
const userRoutes=require("./routes/userRoutes");
const {app,server}=require("./socket/socket");
const { connectToMongoDB } = require("./db/connectToMongoDB");
//const app=express();
const dotenv=require("dotenv");

dotenv.config();

const cookieParser=require("cookie-parser");

const PORT=process.env.PORT||5000;

connectToMongoDB()

app.use(express.json());//to parse the incoming requests with json payloads
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.send("Hello World!");
});

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

server.listen(PORT,()=>
    console.log(`Server running on port ${PORT}`));