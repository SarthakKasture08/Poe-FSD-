# Question 18 - AJAX XML Table

## Objective
To create an AJAX application that reads an XML file and displays employee data in an HTML table.

## Technologies Used

HTML:
- Displays table structure

JavaScript:
- Handles logic

AJAX (XMLHttpRequest):
- Reads XML file

XML:
- Stores structured employee data

## Files Used

data.xml:
- Contains employee data

index.html:
- Reads XML and displays table

## How to Run

1. Open folder in VS Code
2. Run using Live Server
3. Click "Load XML Data"

## Implementation Logic

1. Button click calls loadXML()
2. XMLHttpRequest loads XML file
3. responseXML reads XML
4. Loop through employee nodes
5. Extract values using getElementsByTagName()
6. Insert rows into table

## Output

- Displays employee data in table

## Core Concepts

XML:
- Data storage format

AJAX:
- Fetch data without page reload

DOM:
- Access XML elements

## Viva Concepts

What is XML?
XML is used to store structured data.

What is AJAX?
AJAX fetches data without reloading page.

Difference JSON vs XML:
JSON → lightweight  
XML → tag-based  

## Viva Ready Points

- XML file created manually
- AJAX used to read XML
- Data parsed using DOM
- Table created dynamically

## Key Concepts Summary

- AJAX → Data fetch
- XML → Data storage
- DOM → Data access

## Quick Steps (Exam)

1. Run using Live Server
2. Click button
3. View table