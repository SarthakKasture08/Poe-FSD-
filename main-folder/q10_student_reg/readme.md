# Question 10 – Student Registration Form with MongoDB (Full Stack Implementation)

---

## 📌 Objective

To design and implement a Student Registration Form that collects user details through an HTML interface and stores them in a MongoDB database using Node.js and Express. This project demonstrates complete full-stack development involving frontend, backend, and database integration.

---

# 🌐 SYSTEM ARCHITECTURE

This application follows a **3-tier architecture**:

---

## 🔹 1. Frontend (Client Side)

Technologies:

* HTML
* JavaScript (Fetch API)

### Responsibilities:

* Display form UI
* Collect user input
* Send data to server

---

## 🔹 2. Backend (Server Side)

Technologies:

* Node.js
* Express.js

### Responsibilities:

* Receive HTTP request
* Process data
* Store data in database
* Send response

---

## 🔹 3. Database Layer

Technology:

* MongoDB

### Responsibilities:

* Store user data in JSON format
* Manage records efficiently

---

# ⚙️ DETAILED IMPLEMENTATION

---

## 🔹 1. Frontend Implementation

---

### Form Structure

HTML is used to create input fields:

```html
<input type="text" id="name">
```

Each field corresponds to a student attribute.

---

### Handling Gender (Radio Button)

```javascript
document.querySelector('input[name="gender"]:checked')
```

👉 Ensures selected value is captured.

---

### Data Collection

```javascript
let data = {
    name: document.getElementById("name").value
};
```

👉 DOM is used to extract values from inputs.

---

### Sending Data (Fetch API)

```javascript
fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
```

👉 Converts object → JSON
👉 Sends asynchronous POST request

---

## 🔹 2. Backend Implementation

---

### Server Creation

```javascript
const express = require("express");
const app = express();
```

👉 Initializes Express server.

---

### Middleware

```javascript
app.use(express.json());
```

👉 Parses JSON request body

```javascript
app.use(cors());
```

👉 Allows frontend-backend communication

---

### Database Connection

```javascript
mongoose.connect("mongodb://127.0.0.1:27017/DB")
```

👉 Connects to database named **DB**

---

### Schema Design

```javascript
const userSchema = new mongoose.Schema({
    name: String,
    email: String
});
```

👉 Defines structure of stored data

---

### Model Creation

```javascript
const User = mongoose.model("User", userSchema);
```

👉 Creates collection **users**

---

### Route Handling

```javascript
app.post("/register", async (req, res) => {
```

👉 Handles incoming POST request

---

### Data Storage

```javascript
const newUser = new User(req.body);
await newUser.save();
```

👉 Saves data into MongoDB

---

### Response

```javascript
res.json({ message: "Student Registered Successfully" });
```

---

## 🔹 3. Database Implementation

MongoDB stores data in document format:

```json
{
  "name": "Sarthak",
  "email": "abc@gmail.com"
}
```

👉 Location:

```text
DB → users collection
```

---

# 🔗 COMPLETE WORKING FLOW

1. User fills form
2. Clicks submit
3. Fetch API sends POST request
4. Express receives request
5. Middleware parses JSON
6. Mongoose saves data
7. MongoDB stores document
8. Response sent to client

---

# 🔥 CORE CONCEPTS (DETAILED THEORY)

---

## 🔹 1. Full Stack Development

Full stack development involves:

* Frontend (UI)
* Backend (logic)
* Database (storage)

---

## 🔹 2. Form Handling

Process of:

* Taking input from user
* Sending to server
* Processing and storing

---

## 🔹 3. AJAX (Fetch API)

Allows:

* Asynchronous communication
* No page reload
* Faster interaction

---

## 🔹 4. HTTP Methods

| Method | Use           |
| ------ | ------------- |
| GET    | Retrieve data |
| POST   | Send data     |

👉 This project uses **POST**

---

## 🔹 5. JSON

Lightweight data format:

```json
{ "name": "Sarthak" }
```

---

## 🔹 6. Express.js

Framework used for:

* Routing
* Handling requests
* Simplifying backend

---

## 🔹 7. Middleware

Functions executed before route:

```javascript
express.json()
```

---

## 🔹 8. MongoDB

NoSQL database storing:

* Documents
* Collections

---

## 🔹 9. Mongoose

ODM library used to:

* Define schema
* Interact with MongoDB

---

## 🔹 10. CRUD Operations

| Operation | Description |
| --------- | ----------- |
| Create    | Insert data |
| Read      | Fetch data  |
| Update    | Modify      |
| Delete    | Remove      |

👉 This project performs **CREATE operation**

---

# 🎯 FEATURES

* Full stack application
* Form submission
* MongoDB data storage
* API communication
* Multiple input types
* Clean implementation

---

# 🎤 VIVA QUESTIONS (VERY IMPORTANT)

---

### Q1. What is full stack development?

Combination of frontend, backend, and database.

---

### Q2. What is POST method?

Used to send data to server.

---

### Q3. What is Express?

Node.js framework for server development.

---

### Q4. What is MongoDB?

NoSQL database storing JSON-like documents.

---

### Q5. What is Mongoose?

Library used to interact with MongoDB using schema.

---

### Q6. What is middleware?

Functions that process request before route execution.

---

### Q7. What is fetch()?

Used to send HTTP requests asynchronously.

---

### Q8. What is JSON?

Lightweight data format used for communication.

---

### Q9. Difference between SQL and MongoDB?

| SQL   | MongoDB    |
| ----- | ---------- |
| Table | Collection |
| Row   | Document   |

---

## ⚠️ COMMON MISTAKES

* Missing express.json()
* Wrong route URL
* MongoDB not running
* Empty form submission

---

# 📌 CONCLUSION

This project demonstrates a complete full-stack workflow where data collected through a form is transmitted using HTTP requests, processed by a Node.js server, and stored in a MongoDB database. It effectively integrates frontend, backend, and database technologies to build a functional web application.
