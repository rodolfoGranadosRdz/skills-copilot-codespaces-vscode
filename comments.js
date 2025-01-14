// Create web server
// Create a web server that listens on port 8080 and serves the content of comments.html to any request.

// Use the createServer method from the http module to create the server.
// Use the createReadStream method from the fs module to read the content of comments.html.
// Use the pipe method to send the content of comments.html to the response object.
// Use the listen method to listen on port 8080.

// The server should listen on port 8080.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const fileStream = fs.createReadStream('./comments.html');
  fileStream.pipe(res);
});

server.listen(8080);