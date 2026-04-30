# Node Server - GET & POST

## Objective
Create a Node.js server that reads query string and returns JSON for GET and POST methods.

## File
- server.js

## How to Run

1. Open terminal
2. Run:
   node server.js

3. Open browser:
   http://localhost:3000/?name=Aarya

## Output

GET:
- Returns name from query

POST:
- Returns simple JSON message

## Working

- http module creates server
- url module reads query string
- GET method reads query parameter
- POST method sends different response

## Viva Points

- GET method is used to fetch data
- POST method is used to send data
- Query string is read using url.parse()