import http from "node:http";

const port = 3333;

const app = http.createServer((req, res) => {
  console.log("Starting server | PORT:3333");

  res.writeHead(404).end();
});

app.listen(port);
