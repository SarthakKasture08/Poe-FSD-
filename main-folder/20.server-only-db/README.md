# Question 20 - Server Side Data Storage (PHP + MySQL)

## Objective
To store form data into a MySQL database using server-side scripting (PHP) without writing HTML code.

## Technologies Used

PHP:
- Server-side scripting language
- Processes form data

MySQL:
- Database used to store data

XAMPP:
- Local server (Apache + MySQL)

## Files Used

process.php:
- Receives form data using POST
- Inserts data into database

connect.php:
- Establishes connection with MySQL database

reg.html:
- Already provided form (not written in answer)

## Database Setup (SQL)

Run the following SQL in phpMyAdmin:

CREATE DATABASE DB;

USE DB;

CREATE TABLE users1 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(20),
    address VARCHAR(100),
    city VARCHAR(50),
    state VARCHAR(50)
);

## How to Run

1. Start XAMPP (Apache + MySQL)
2. Open phpMyAdmin
3. Run SQL above to create database and table
4. Place files inside:
   C:\xampp\htdocs\20.server-only-db\
5. Make sure form (reg.html) has:
   <form action="process.php" method="post">
6. Open browser:
   http://localhost/20.server-only-db/reg.html

## Implementation Logic

1. User fills form (reg.html)
2. Form sends data using POST method
3. process.php receives data using $_POST
4. Database connection is established using connect.php
5. SQL INSERT query executes
6. Data is stored in users1 table

## Output

- Data stored in database
- Success message displayed

## Core Concepts

POST:
- Used to send form data securely

PHP:
- Handles backend logic

MySQL:
- Stores data permanently

## Viva Concepts

What is $_POST?
Used to receive form data in PHP.

What is SQL?
Language used to interact with database.

What is INSERT query?
Used to insert data into table.

Why no HTML?
Because question requires only server-side code.

## Viva Ready Points

- Only backend code written
- Form data received using $_POST
- PHP connects to MySQL
- Data inserted using SQL query

## Key Concepts Summary

- PHP → Backend processing
- MySQL → Data storage
- SQL → Query execution
- POST → Data transfer

## Quick Steps (Exam)

1. Write process.php
2. Use $_POST to get data
3. Write INSERT query
4. Done