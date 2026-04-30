# Question 14 - Node.js Server (GET & POST)

## Objective
To create a Node.js server that reads query string and returns different JSON responses for GET and POST methods.

## Technologies Used

### Node.js
- Used to run JavaScript on server
- Creates backend server
- Handles client requests  
Node.js enables server-side programming.

### HTTP Module
- Used to create server  
http.createServer() handles request and response.

### URL Module
- Used to read query string  
url.parse() extracts data from URL.

### JSON
- Used to send data from server  
JSON is lightweight and easy to read.

## File Used

### server.js
Purpose:
- Creates server
- Handles GET and POST requests

Code Logic:
const http = require("http");
const url = require("url");

http.createServer((req, res) => { ... });

Role:
- Core backend file
- Handles all logic

## How to Run

1. Open terminal
2. Go to folder:
   cd main-folder/14.node-server-query
3. Run server:
   node server.js

Server starts at:
http://localhost:3000

## Test GET

Open browser:
http://localhost:3000/?name=Aarya

Output:
{
  "message": "GET request received",
  "name": "Aarya"
}

## Test POST

In PowerShell:
irm http://localhost:3000 -Method POST

Output:
{
  "message": "POST request received"
}

## Implementation Logic (Flow)

1. Server is created using http.createServer()
2. Server listens on port 3000
3. Request is received from client
4. req.method checks request type
5. If GET:
   - url.parse() reads query string
   - Extracts name value
   - Sends JSON response
6. If POST:
   - Sends different JSON response
7. JSON.stringify() converts object to JSON

## Output

- GET → Returns name from query string
- POST → Returns message response

## Core Concepts

Query String:
- Data passed in URL after ?
Example: ?name=Aarya

GET Method:
- Data sent in URL
- Used for fetching data

POST Method:
- Data sent in request body
- Used for sending data

Server:
- Program that handles client requests and sends response

JSON:
- Data format used for communication

## Viva Concepts

What is Node.js?
Node.js is a runtime environment used to execute JavaScript on server.

What is Server?
Server is a program that handles client requests.

What is Query String?
Data passed in URL after '?'.

Difference between GET and POST:
GET → data in URL  
POST → data in body  

Why JSON used?
Because it is lightweight and easy to transfer.

## Viva Ready Points

- Node.js used for backend server
- HTTP module used to create server
- URL module used to read query string
- GET request reads data from URL
- POST request sends different response
- JSON used for data exchange

## Key Concepts Summary

- Server → Handles requests
- Query String → URL data
- GET → Fetch data
- POST → Send data
- JSON → Data format

## Quick Steps (Exam)

1. Run node server.js
2. Open browser for GET
3. Use terminal for POST
4. Check JSON output