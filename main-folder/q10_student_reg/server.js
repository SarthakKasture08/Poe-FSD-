const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// Connect MongoDB (IMPORTANT: DB name = DB)
mongoose.connect("mongodb://127.0.0.1:27017/DB")
.then(() => console.log("MongoDB Connected"));

// Schema
const userSchema = new mongoose.Schema({
    name: String,
    dob: String,
    gender: String,
    email: String,
    address: String,
    school: String,
    department: String,
    course: String,
    phone: String
});

// Collection name = users
const User = mongoose.model("User", userSchema);

// POST route
app.post("/register", async (req, res) => {

    console.log("DATA:", req.body);

    const newUser = new User(req.body);
    await newUser.save();

    res.json({ message: "Student Registered Successfully" });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});