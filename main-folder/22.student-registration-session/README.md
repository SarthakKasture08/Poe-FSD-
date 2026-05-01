# Question 22 - Student Registration using PHP Session

## Objective
To create a student registration system using PHP session management.

## Technologies Used

HTML:
- Used to create form

PHP:
- Server-side scripting language

Session:
- Stores user data temporarily

## Files Used

index.php:
- Registration form

register.php:
- Stores data in session

dashboard.php:
- Displays stored data

logout.php:
- Destroys session

## How to Run

1. Start XAMPP (Apache)
2. Place folder in htdocs
3. Open:
   http://localhost/22.student-registration-session/index.php

## Implementation Logic

1. User enters data in form
2. Data sent using POST
3. session_start() starts session
4. $_SESSION stores data
5. Redirect to dashboard
6. dashboard displays data
7. logout destroys session

## Output

- Displays entered name and email
- Logout clears session

## Core Concepts

Session:
- Temporary storage on server

POST:
- Sends data securely

PHP:
- Handles backend

## Viva Concepts

What is session?
Stores user data on server.

What is session_start()?
Starts session.

What is $_SESSION?
Used to store session data.

What is session_destroy()?
Deletes session.

## Viva Ready Points

- Session stores data
- PHP processes form
- No database used

## Key Concepts Summary

- Session → Temporary storage
- PHP → Backend
- Form → Input

## Quick Steps (Exam)

1. Write form
2. Use session_start()
3. Store data in $_SESSION
4. Display and logout