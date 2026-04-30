const http = require("http");
const url = require("url");

const myServer = http.createServer((incomingRequest, outgoingResponse) => {

    const parsedUrl = url.parse(incomingRequest.url, true);

    // GET method
    if (incomingRequest.method === "GET") {
        const nameValue = parsedUrl.query.name;

        outgoingResponse.writeHead(200, { "Content-Type": "application/json" });

        outgoingResponse.end(JSON.stringify({
            message: "GET request received",
            name: nameValue
        }));
    }

    // POST method
    else if (incomingRequest.method === "POST") {

        outgoingResponse.writeHead(200, { "Content-Type": "application/json" });

        outgoingResponse.end(JSON.stringify({
            message: "POST request received"
        }));
    }

});

myServer.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});