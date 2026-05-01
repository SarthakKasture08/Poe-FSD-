# Question 4 – AJAX with REST API (University Search)

---

## 📌 Objective

To create a web application that takes a country name as input from the user, sends an AJAX request to a REST API, retrieves university data in JSON format, and displays the results dynamically on the webpage.

---

## 🌐 Technologies Used

### 🔹 HTML

Used to design the user interface:

* Input field to enter country name
* Button to trigger search
* List to display university names

---

### 🔹 CSS

Used to enhance UI:

* Styling input fields and buttons
* Designing result list
* Improving readability

---

### 🔹 JavaScript

Used for:

* Handling user input
* Making AJAX request using XMLHttpRequest
* Parsing JSON data
* Updating DOM dynamically

---

### 🔹 REST API

API used:

```text id="k3lxrm"
https://universities.hipolabs.com/search?country=India
```

👉 Returns university data in JSON format.

---

## ⚙️ DETAILED IMPLEMENTATION

---

### 🔹 1. Taking User Input

```javascript id="hf2caa"
let country = document.getElementById("country").value;
```

👉 Retrieves country entered by user.

📌 Concept:

* DOM manipulation
* Input handling

---

### 🔹 2. Creating AJAX Object

```javascript id="rq8rlg"
let xhttp = new XMLHttpRequest();
```

👉 Used to send HTTP request to API.

📌 Concept:

* XMLHttpRequest object
* Asynchronous communication

---

### 🔹 3. Creating Dynamic URL

```javascript id="y9kz2m"
let url = "https://universities.hipolabs.com/search?country=" + country;
```

👉 URL changes based on user input.

📌 Concept:

* Query parameters
* Dynamic API calls

---

### 🔹 4. Opening Request

```javascript id="6oxhwb"
xhttp.open("GET", url, true);
```

👉 Defines:

* GET method
* API URL
* Asynchronous request

---

### 🔹 5. Sending Request

```javascript id="sfmf7e"
xhttp.send();
```

👉 Sends request to server.

---

### 🔹 6. Handling Response

```javascript id="85n02s"
xhttp.onreadystatechange = function()
```

👉 Executes when response is received.

---

### 🔹 7. Checking Status

```javascript id="2s9h1p"
if (this.readyState == 4 && this.status == 200)
```

👉 Ensures successful request.

📌 Concept:

* readyState → request lifecycle
* status → HTTP response code

---

### 🔹 8. Parsing JSON Data

```javascript id="f76m1l"
let data = JSON.parse(this.responseText);
```

👉 Converts JSON string into JavaScript object.

📌 Concept:

* JSON parsing
* Data conversion

---

### 🔹 9. Displaying Data

```javascript id="w5k6sd"
data[i].name
```

👉 Extracts university names.

---

### 🔹 10. DOM Manipulation

```javascript id="crpj33"
let li = document.createElement("li");
```

👉 Creates new list elements dynamically.

---

### 🔹 11. Clearing Old Data

```javascript id="p2z9c8"
list.innerHTML = "";
```

👉 Prevents duplicate data.

---

## 🔗 COMPLETE WORKING FLOW

1. User enters country name
2. Clicks search button
3. AJAX request sent to REST API
4. API returns JSON data
5. JSON is parsed
6. University names extracted
7. Data displayed in list
8. No page reload occurs

---

## 🧠 CORE CONCEPTS (DETAILED)

---

### 🔹 What is AJAX?

AJAX (Asynchronous JavaScript and XML) allows data exchange with server without reloading page.

✔ Improves performance
✔ Provides smooth user experience

---

### 🔹 What is REST API?

REST API is a web service that uses HTTP methods to exchange data.

Example:

```text id="4v3z3v"
GET /search?country=India
```

---

### 🔹 What is JSON?

Example:

```json id="rc3gwn"
{
  "name": "IIT Bombay",
  "country": "India"
}
```

👉 JSON is lightweight and easy to parse.

---

### 🔹 XML vs JSON

| Feature     | XML       | JSON      |
| ----------- | --------- | --------- |
| Format      | Tag-based | Key-value |
| Readability | Complex   | Easy      |
| Usage       | Older     | Modern    |

---

### 🔹 DOM (Document Object Model)

👉 Allows JavaScript to:

* Read elements
* Modify content
* Create new elements

---

### 🔹 Asynchronous Programming

👉 Code runs without blocking UI.

✔ User can interact while data loads

---

## 🎯 FEATURES

* Dynamic API calling
* User input-based search
* JSON parsing
* Real-time data display
* No page reload

---

## 🎤 VIVA READY POINTS

* AJAX used to call REST API
* JSON used as data format
* DOM used to display results
* XMLHttpRequest used for communication
* Asynchronous execution improves performance

---

## 📌 CONCLUSION

This application demonstrates integration of AJAX with REST APIs, where dynamic data is fetched in JSON format and displayed on the webpage without reloading, providing efficient and interactive user experience.
