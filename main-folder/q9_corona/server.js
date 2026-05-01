const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/epassDB")
.then(() => console.log("MongoDB Connected"));

// Schema
const formSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    purpose: String,
    vehicle: String
});

const Form = mongoose.model("Form", formSchema);

// POST route
app.post("/submit", async (req, res) => {

    const data = req.body;

    const newData = new Form(data);
    await newData.save();

    res.json({ message: "Data saved successfully" });
});

// Server start
app.listen(3000, () => {
    console.log("Server running on port 3000");
});