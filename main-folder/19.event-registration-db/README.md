# Question 19 - Event Registration with Database

## Objective
To create an event registration form and store user data in a database using PHP and MySQL.

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

## Database

Database Name: DB  
Table Name: users  

Fields:
- id (Primary Key)
- name
- email
- phone

## How to Run

1. Start XAMPP (Apache + MySQL)
2. Open phpMyAdmin
3. Create database DB
4. Create table users
5. Move folder to htdocs
6. Open:
   http://localhost/19.event-registration-db/index.php

## Implementation Logic

1. User fills form
2. Form sends data using POST
3. PHP reads data using $_POST
4. Database connection established
5. SQL INSERT query runs
6. Data stored in table

## Output

- Data inserted into database
- Success message shown

## Core Concepts

Form:
- Used to collect input

Database:
- Stores data permanently

PHP:
- Processes and inserts data

## Viva Concepts

What is MySQL?
Database used to store data.

What is PHP?
Server-side language.

What is SQL?
Language used to interact with database.

What is INSERT?
Used to add data in table.

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
2. Create DB
3. Run index.php
4. Enter data
5. Check phpMyAdmin