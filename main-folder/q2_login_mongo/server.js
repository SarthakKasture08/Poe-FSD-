// IMPORT REQUIRED MODULES
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// CREATE APP
const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());              // allow frontend connection

// CONNECT TO MONGODB (LOCAL)
mongoose.connect("mongodb://127.0.0.1:27017/loginDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// CREATE SCHEMA
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

// CREATE MODEL
const User = mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {

    console.log("BODY:", req.body);

    const userNameInput = req.body.username.trim();
    const userPassInput = req.body.password.trim();

    console.log("Entered:", userNameInput, userPassInput);

    try {
        const foundUser = await User.findOne({ username: userNameInput });

        console.log("DB Result:", foundUser);

        if (!foundUser) {
            return res.json({ message: "User Not Found" });
        }

        if (foundUser.password === userPassInput) {
            return res.json({ message: "Login Successful" });
        } else {
            return res.json({ message: "Wrong Password" });
        }

    } catch (error) {
        console.log(error);
        res.json({ message: "Error Occurred" });
    }
});


// START SERVER
app.listen(3000, () => {
    console.log("Server running on port 3000");
});