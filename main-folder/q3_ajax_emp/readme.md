# Question 3 – AJAX (XMLHttpRequest) with XML Data (Detailed Explanation)

---

## 📌 Objective

To implement AJAX using XMLHttpRequest to fetch employee data from an XML file and dynamically display it in an HTML table without reloading the webpage.

---

## 🌐 Technologies Used

### 🔹 HTML

Used to structure the webpage.

* Table is used to display employee records
* Button is used to trigger AJAX request
* Provides skeleton of UI

---

### 🔹 CSS

Used for presentation and styling.

* Enhances readability of table
* Adds hover effects and alignment
* Improves user experience

---

### 🔹 JavaScript

Used to:

* Implement AJAX using XMLHttpRequest
* Handle events (button click)
* Parse XML data using DOM
* Dynamically update HTML content

---

### 🔹 XML (Extensible Markup Language)

XML is used as a data storage format.

Example structure:

```xml
<employees>
    <employee>
        <id>1</id>
        <name>Rahul</name>
        <dob>2002-01-10</dob>
        <start-date>2024-01-01</start-date>
        <salary>50000</salary>
    </employee>
</employees>
```

👉 XML stores hierarchical data in tag-based structure.

---

# ⚙️ DETAILED IMPLEMENTATION

---

## 🔹 1. Event Handling (Button Click)

```javascript
<button onclick="loadData()">Load Data</button>
```

👉 When user clicks button, `loadData()` function is triggered.

📌 Concept:

* Event Handling (Unit I)
* User interaction triggers JavaScript execution

---

## 🔹 2. Creating AJAX Object

```javascript
let xhttp = new XMLHttpRequest();
```

👉 This object is used to communicate with the server asynchronously.

📌 Concept:

* XMLHttpRequest is the core object for AJAX
* Allows sending HTTP requests and receiving responses

---

## 🔹 3. Configuring Request

```javascript
xhttp.open("GET", "data.xml", true);
```

👉 Parameters:

* `"GET"` → method (fetch data)
* `"data.xml"` → file path
* `true` → asynchronous request

📌 Concept:

* HTTP Methods (GET, POST)
* Asynchronous communication

---

## 🔹 4. Sending Request

```javascript
xhttp.send();
```

👉 Sends request to server to fetch XML file.

📌 Concept:

* Client-server communication
* Request is sent without blocking UI

---

## 🔹 5. Handling Response (State Change)

```javascript
xhttp.onreadystatechange = function() {
```

👉 This function is triggered whenever request state changes.

---

## 🔹 6. Checking Request Status

```javascript
if (this.readyState == 4 && this.status == 200)
```

👉 Conditions:

* readyState = 4 → request completed
* status = 200 → success

📌 Concept:

* HTTP Status Codes
* Request lifecycle

---

## 🔹 7. Parsing XML Data

```javascript
let xmlDoc = this.responseXML;
```

👉 Converts response into XML DOM object.

📌 Concept:

* DOM parsing of XML
* Allows traversal of XML structure

---

## 🔹 8. Accessing Elements

```javascript
let employees = xmlDoc.getElementsByTagName("employee");
```

👉 Retrieves all employee nodes.

📌 Concept:

* DOM traversal
* NodeList handling

---

## 🔹 9. Extracting Values

```javascript
employees[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
```

👉 Explanation:

* Access specific tag
* Get text inside it

📌 Concept:

* Tree structure of XML
* Node → Child → Value

---

## 🔹 10. Dynamic Table Creation

```javascript
let row = table.insertRow();
row.insertCell(0).innerHTML = id;
```

👉 Dynamically inserts rows and cells into table.

📌 Concept:

* DOM manipulation
* Dynamic UI generation

---

## 🔹 11. Clearing Old Data (Important)

```javascript
table.innerHTML = ...
```

👉 Prevents duplicate rows when button is clicked multiple times.

📌 Concept:

* State management in UI
* Avoid redundant data

---

# 🔗 COMPLETE WORKING FLOW

1. User clicks button
2. JavaScript creates XMLHttpRequest
3. Request is sent to XML file
4. Server returns XML response
5. Response is parsed using DOM
6. Data is extracted from XML nodes
7. Table is dynamically updated
8. No page reload occurs

---

# 🧠 CORE CONCEPTS (DETAILED)

---

## 🔹 AJAX (Asynchronous JavaScript and XML)

👉 AJAX allows communication with server without reloading page.

### Key Features:

* Asynchronous execution
* Improves performance
* Partial page updates

---

## 🔹 Synchronous vs Asynchronous

| Feature   | Synchronous | Asynchronous |
| --------- | ----------- | ------------ |
| Execution | Blocking    | Non-blocking |
| UI        | Freezes     | Responsive   |
| AJAX      | ❌           | ✔            |

---

## 🔹 XMLHttpRequest Object

Used to:

* Send HTTP requests
* Receive server response
* Work asynchronously

---

## 🔹 DOM (Document Object Model)

👉 Represents HTML/XML as tree structure.

Example:

```
employee
 ├── id
 ├── name
```

👉 JavaScript uses DOM to:

* Read data
* Modify elements

---

## 🔹 XML vs JSON

| Feature     | XML           | JSON        |
| ----------- | ------------- | ----------- |
| Format      | Tag-based     | Key-value   |
| Readability | Complex       | Easy        |
| Usage       | Older systems | Modern apps |

---

## 🔹 HTTP Status Codes

| Code | Meaning      |
| ---- | ------------ |
| 200  | OK           |
| 404  | Not found    |
| 500  | Server error |

---

# 🎯 FEATURES

* Asynchronous data loading
* XML parsing using DOM
* Dynamic table generation
* No page refresh
* Clean UI design

---

# 🎤 VIVA READY POINTS

* XMLHttpRequest used for AJAX communication
* readyState and status used to check response
* XML parsed using DOM methods
* Data displayed dynamically using JavaScript
* Asynchronous programming improves performance

---

# 📌 CONCLUSION

This implementation demonstrates how AJAX can be used to fetch and process XML data dynamically using JavaScript and DOM, enabling efficient and responsive web applications.
