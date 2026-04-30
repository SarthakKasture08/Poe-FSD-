# Question 12 - Student Registration using PHP Session (Complete Explanation)

## Objective
To design a student registration system using PHP where user data is collected through a form, stored using session management, and displayed across multiple pages without using a database.

## Technologies Used

### HTML (HyperText Markup Language)
- Used to create the structure of the form
- Takes user input (name, email)
- Uses `<form>`, `<input>` elements  
HTML handles user interface.

### PHP
- Server-side scripting language
- Processes form data
- Stores and retrieves session data
- Handles page redirection  
PHP handles backend logic.

### Session
- Temporary storage on server
- Maintains data across multiple pages  
Used instead of database.

## Files Used (File-wise Explanation)

### index.php (Input Layer)
Purpose:
- Displays the registration form
- Collects user input

Code Logic:
<form action="register.php" method="post">

Role:
- Entry point of the application
- Takes student details

### register.php (Processing Layer)
Purpose:
- Processes form data
- Stores data in session

Code Logic:
session_start();
$_SESSION['name'] = $_POST['name'];
$_SESSION['email'] = $_POST['email'];

header("Location: dashboard.php");

Role:
- Implements session management
- Connects input and output

### dashboard.php (Output Layer)
Purpose:
- Displays stored student data

Code Logic:
echo $_SESSION['name'];

Role:
- Shows registration result
- Confirms session working

### logout.php (Session Control Layer)
Purpose:
- Ends session
- Clears stored data

Code Logic:
session_start();
session_destroy();

Role:
- Completes session lifecycle

## How to Run

Method 1 (XAMPP):
1. Install XAMPP
2. Copy folder to: C:\xampp\htdocs\
3. Start Apache
4. Open: http://localhost/12.student-registration/index.php

Method 2 (PHP Server):
1. Open terminal in project folder
2. Run: php -S localhost:8000
3. Open: http://localhost:8000

## Implementation Logic (Flow)
1. User enters data in index.php
2. Form sends data to register.php using POST
3. register.php starts session and stores data using $_SESSION
4. User is redirected to dashboard.php
5. dashboard.php displays stored data
6. logout.php destroys session

## Output
- Displays entered name and email
- Logout clears session data

## Core Concepts

Session Management:
- Stores data across pages
- Avoids database

Form Handling:
- Data collected using HTML form
- Sent using POST method

Client-Server Model:
- Browser sends request
- PHP processes and responds

Page Redirection:
- header() used for navigation

## Viva Concepts

What is HTML?
HTML is used to structure web pages.

What is PHP?
PHP is a server-side scripting language used for backend processing.

What is Session?
Session stores user data temporarily on server across multiple pages.

Difference between GET and POST:
GET → data in URL  
POST → data in body  

Why session instead of database?
- Simple
- Temporary storage
- No database required

What is header()?
Used to redirect user to another page.

## Viva Ready Points
- HTML used for form creation
- PHP used for backend logic
- Session used for temporary storage
- POST method used for secure data transfer
- header() used for redirection
- No database used

## Key Concepts Summary
- Session → Temporary storage
- PHP → Backend processing
- POST → Secure data transfer
- Form → Input mechanism

## Quick Steps (Exam)
1. Start Apache
2. Open index.php using localhost
3. Enter data
4. Submit form
5. View output