# Question 15 - AJAX GitHub API (User Information Fetch)

## Objective
To create a web application using AJAX (XMLHttpRequest) to fetch user information from the GitHub API and display it dynamically without reloading the page.

## Technologies Used

### HTML (HyperText Markup Language)
- Used to create input field and button
- Displays output on webpage  
HTML provides structure.

### JavaScript
- Handles logic and interactivity
- Sends AJAX request
- Processes API response  
JavaScript makes the page dynamic.

### AJAX (XMLHttpRequest)
- Used to send request to server without page reload  
Allows asynchronous communication.

### GitHub API
- Public API used to fetch user data  
Example:
https://api.github.com/users/username

### JSON
- Data format returned by API  
Used to exchange data.

## File Used

### index.html
Purpose:
- Takes username input
- Calls API using AJAX
- Displays result

Code Logic:
var request = new XMLHttpRequest();
request.open("GET", "https://api.github.com/users/" + username);

Role:
- Main file handling UI and logic

## How to Run

1. Open folder
2. Open index.html in browser
   (double click OR use Live Server)

No server required.

## Implementation Logic (Flow)

1. User enters GitHub username
2. Clicks button
3. JavaScript function runs
4. XMLHttpRequest sends GET request to GitHub API
5. API returns JSON data
6. JSON.parse() converts response to object
7. Data is displayed on webpage
8. If user not found → error message shown

## Output

- Displays:
  - Username
  - Number of public repositories
- If invalid username → shows "User not found"

## Core Concepts

AJAX:
- Used to fetch data without refreshing page

API:
- Interface to get data from server

JSON:
- Data format used to transfer information

Asynchronous Programming:
- Code runs without waiting for response

## Viva Concepts

What is AJAX?
AJAX is used to fetch data from server without reloading the page.

What is API?
API is an interface that allows communication between systems.

What is JSON?
JSON is a lightweight data format used for data exchange.

What is XMLHttpRequest?
Object used to send HTTP requests in JavaScript.

What is Asynchronous?
Execution without blocking program flow.

## Viva Ready Points

- AJAX used for dynamic data fetching
- XMLHttpRequest sends request
- GitHub API provides user data
- JSON used for response format
- No page reload required

## Key Concepts Summary

- AJAX → No page reload
- API → Data source
- JSON → Data format
- JavaScript → Logic handling

## Quick Steps (Exam)

1. Open index.html
2. Enter GitHub username
3. Click search button
4. View result