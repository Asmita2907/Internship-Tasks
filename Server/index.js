const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

  // CSS Route
  if (req.url === "/style.css") {
    fs.readFile("style.css", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.end(data);
    });
    return;
  }

  // Home Page
  if (req.url === "/") {
    const data = fs.readFileSync("home.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  }

  // About Page
  else if (req.url === "/about") {
    const data = fs.readFileSync("about.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  }

  // Contact Page
  else if (req.url === "/contact") {
    const data = fs.readFileSync("contact.html");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  }

  // 404
  else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Page Not Found</h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});