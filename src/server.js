import http from "node:http";
import { routes } from "./routes.js";

const port = 3333;

const app = http.createServer((req, res) => {
  console.log("Starting server | PORT:3333");

  const { url, method } = req;

  const route = routes.find(
    (route) => route.path === url && route.method === method
  );

  if (!route) {
    res.writeHead(404).end();
    return;
  }

  route.handler(req, res);
});

app.listen(port);
