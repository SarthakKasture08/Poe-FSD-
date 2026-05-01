# Question 19 - Event Registration with Database

## Objective
To create an event registration form and store user data in a MySQL database using PHP.

## Technologies Used

HTML:
- Used to create form

PHP:
- Server-side scripting language
- Handles form submission

MySQL:
- Database to store data

XAMPP:
- Local server (Apache + MySQL)

## Files Used

index.php:
- Displays form
- Inserts data into database

connect.php:
- Connects PHP with MySQL

## Database Setup (SQL)

Run the following SQL in phpMyAdmin:

CREATE DATABASE DB;

USE DB;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    title VARCHAR(50),
    company VARCHAR(50),
    email VARCHAR(50),
    phone VARCHAR(20),
    customer VARCHAR(10)
);

## How to Run

1. Start XAMPP (Apache + MySQL)
2. Open phpMyAdmin
3. Run SQL above to create database and table
4. Move project folder to:
   C:\xampp\htdocs\
5. Open browser:
   http://localhost/19.event-registration-db/index.php

## Implementation Logic

1. User fills form
2. Form sends data using POST
3. PHP reads data using $_POST
4. Database connection established using connect.php
5. SQL INSERT query executes
6. Data stored in users table

## Output

- Data inserted into database
- Success message displayed

## Core Concepts

Form:
- Used to collect user input

Database:
- Stores data permanently

PHP:
- Processes form data

## Viva Concepts

What is MySQL?
Database used to store data.

What is PHP?
Server-side language used for backend processing.

What is SQL?
Language used to interact with database.

What is INSERT query?
Used to add data into table.

## Viva Ready Points

- HTML form collects data
- PHP processes input
- MySQL stores data
- SQL query used for insertion

## Key Concepts Summary

- PHP → Backend
- MySQL → Database
- SQL → Query language
- Form → Input

## Quick Steps (Exam)

1. Start XAMPP
2. Run SQL
3. Open index.php
4. Enter data
5. Check phpMyAdmin