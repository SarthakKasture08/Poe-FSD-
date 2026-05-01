# Question 21 - User Authentication (PHP)

## Objective
To implement user login authentication using PHP and MySQL.

## Technologies Used

PHP:
- Handles login logic

MySQL:
- Stores user credentials

Session:
- Maintains login state

## Files Used

login.php:
- Login form and authentication

dashboard.php:
- Protected page

logout.php:
- Ends session

connect.php:
- Connects database

## Database Setup (SQL)

CREATE DATABASE DB;

USE DB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    password VARCHAR(50)
);

INSERT INTO users (username, password)
VALUES ('admin', '1234');

## How to Run

1. Start XAMPP
2. Run SQL in phpMyAdmin
3. Place files in htdocs
4. Open login.php

## Implementation Logic

1. User enters username & password
2. PHP checks DB using SELECT query
3. If match → session created
4. Redirect to dashboard
5. Logout destroys session

## Output

- Valid login → dashboard
- Invalid login → error

## Core Concepts

Authentication:
- Verifies user identity

Session:
- Stores login state

## Viva Concepts

What is session?
Stores user data temporarily.

What is authentication?
Process of verifying user.

What is SELECT query?
Used to fetch data.

## Viva Ready Points

- PHP checks login
- MySQL stores users
- Session used for login state

## Quick Steps (Exam)

1. Write login logic
2. Use SELECT query
3. Use session
4. Redirect