# Question 2 – Login Application using Node.js, Express.js and MongoDB

---

## 📌 Objective

To create a simple login application using server-side scripting (Node.js with Express) and MongoDB as a database to validate user credentials.

---

## 🌐 Technologies Used

### 🔹 HTML

Used to design the frontend login form.

* Takes username and password input
* Uses button click to trigger login function

---

### 🔹 CSS

Used to style the login page.

* Centered layout
* Styled input fields and button
* Improves user interface

---

### 🔹 JavaScript (Frontend)

Used for:

* Handling user input
* Sending request to backend using Fetch API (AJAX)
* Handling server response

---

### 🔹 Node.js

Node.js is a JavaScript runtime used to execute JavaScript on the server side.

👉 It allows:

* Creating server applications
* Handling requests and responses
* Running backend logic

---

### 🔹 Express.js

Express is a framework built on Node.js that simplifies server development.

👉 Why Express is used:

* Simplifies routing
* Handles HTTP requests easily
* Supports middleware

---

### 🔹 MongoDB

MongoDB is a NoSQL database used to store user data.

👉 Stores data in JSON-like format:

```json
{
  "username": "admin",
  "password": "123"
}
```

---

### 🔹 Mongoose

Mongoose is used to connect Node.js with MongoDB.

👉 Provides:

* Schema definition
* Easy database queries
* Data validation

---

## ⚙️ Implementation Details (Code Logic)

---

### 🔹 1. Server Creation (Node + Express)

```javascript
const express = require("express");
const app = express();
```

👉 Creates an Express server application.

---

### 🔹 2. Middleware

```javascript
app.use(express.json());
app.use(cors());
```

👉 Middleware processes incoming requests.

* `express.json()` → converts JSON data from frontend into JavaScript object
* `cors()` → allows frontend to communicate with backend

---

### 🔹 3. MongoDB Connection

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/loginDB")
```

👉 Connects to local MongoDB database.

---

### 🔹 4. Schema and Model

```javascript
const userSchema = new mongoose.Schema({
    username: String,
    password: String
});
```

👉 Defines structure of database document.

```javascript
const User = mongoose.model("User", userSchema);
```

👉 Model is used to perform database operations.

---

### 🔹 5. Login Route (Routing in Express)

```javascript
app.post("/login", async (req, res) => {
```

👉 Defines API endpoint for login.

---

### 🔹 6. Request Handling

```javascript
const username = req.body.username;
const password = req.body.password;
```

👉 Gets data sent from frontend.

---

### 🔹 7. Database Query

```javascript
const foundUser = await User.findOne({ username: username });
```

👉 Searches user in database.

---

### 🔹 8. Password Verification

```javascript
if (foundUser.password === password)
```

👉 Compares input password with database password.

---

### 🔹 9. Response to Client

```javascript
res.json({ message: "Login Successful" });
```

👉 Sends response back to frontend.

---

### 🔹 10. Frontend AJAX (Fetch API)

```javascript
fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
})
```

👉 Sends data from frontend to backend using JSON.

---

## 🔗 Complete Flow of Application

1. User enters username and password
2. Clicks login button
3. JavaScript sends POST request using fetch API
4. Express server receives request
5. MongoDB is queried using Mongoose
6. If user found → password checked
7. Server sends response
8. Frontend displays result

---

## 🎯 Features

* Login authentication using database
* Secure data transfer using POST method
* JSON-based communication
* MongoDB integration
* Express routing
* Simple and clean UI

---

## 🧠 Important Concepts (Viva)

---

### 🔹 What is Express?

Express is a backend framework that simplifies routing, middleware handling, and request-response management.

---

### 🔹 What is Middleware?

Middleware is a function that processes request before reaching route.

Example:

```javascript
app.use(express.json());
```

---

### 🔹 What is Routing?

Routing means defining how application responds to client requests.

Example:

```javascript
app.post("/login")
```

---

### 🔹 What is Request and Response?

* Request (req) → data sent from client
* Response (res) → data sent back from server

---

### 🔹 What is MongoDB?

MongoDB is a NoSQL database that stores data in JSON format.

---

### 🔹 What is Mongoose?

Mongoose is an ODM (Object Data Modeling) library used to interact with MongoDB easily.

---

### 🔹 What is AJAX?

AJAX allows sending and receiving data without reloading the page.

Used via Fetch API.

---

### 🔹 What is JSON?

JSON is a format used to transfer data between frontend and backend.

---

## 🎤 Viva Ready Points

* Node.js used for backend execution
* Express simplifies routing and middleware
* MongoDB used as NoSQL database
* Mongoose used for schema and queries
* Fetch API used for AJAX communication
* POST method used for secure data transfer
* express.json() middleware parses request body

---

## 📌 Conclusion

The project demonstrates a complete login system using Node.js, Express, and MongoDB. It shows understanding of server-side development, database integration, and client-server communication.
