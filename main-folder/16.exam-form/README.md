# Question 16 - Exam Registration Form with Validation

## Objective
To design an exam registration form with mandatory fields and apply validation using HTML and JavaScript.

## Technologies Used

### HTML
- Used to create form structure
- Input fields for user data

### JavaScript
- Used for validation
- Checks required fields before submission

## File Used

### index.html
Purpose:
- Displays form
- Handles validation

## How to Run

1. Open index.html in browser
2. Fill form
3. Click submit

## Implementation Logic

1. User enters details
2. On submit → validateForm() runs
3. Checks:
   - Empty fields
   - Age condition
4. If invalid → shows alert
5. If valid → form submits

## Output

- Shows alert if fields empty
- Shows alert if age < 18
- Accepts valid data

## Core Concepts

Form:
- Used to collect user input

Validation:
- Ensures correct data entry

DOM:
- JavaScript accesses elements using getElementById()

## Viva Concepts

What is HTML?
Used to structure web pages.

What is JavaScript?
Used to add logic and validation.

What is Validation?
Checking input before submission.

What is DOM?
Represents HTML elements for JavaScript.

## Viva Ready Points

- Form created using HTML
- Validation applied using JavaScript
- Mandatory fields enforced
- Prevents incorrect data submission

## Key Concepts Summary

- Form → Input collection
- Validation → Data checking
- JavaScript → Logic

## Quick Steps (Exam)

1. Open index.html
2. Leave fields empty → error
3. Enter valid data → success