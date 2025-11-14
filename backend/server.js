const path = require("path");
const dotenv = require("dotenv");
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const userRoutes = require("./routes/userRoutes");
const { app, server } = require("./socket/socket");
const { connectToMongoDB } = require("./db/connectToMongoDB");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 5000;

// Load .env from ROOT folder (one level up from backend)
dotenv.config({
    path: path.join(__dirname, "../.env"),
});

connectToMongoDB();

// Middleware
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Serve Frontend (dist)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

// Start Server
server.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
);
