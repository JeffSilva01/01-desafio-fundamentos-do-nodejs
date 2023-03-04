import http from "node:http";
import { json } from "./middlewares/json.js";
import { routes } from "./routes.js";
import { extractQueryParams } from "./utils/extract-query-params.js";

const port = 3333;

const app = http.createServer(async (req, res) => {
  console.log("Starting server | PORT:3333");

  await json(req, res);

  const { url, method } = req;

  const route = routes.find(
    (route) => route.path.test(url) && route.method === method
  );

  if (!route) {
    res.writeHead(404).end();
    return;
  }

  const routeParams = url.match(route.path);

  const { query, ...params } = routeParams.groups;

  req.query = query ? extractQueryParams(query, params) : {};
  req.params = params;

  route.handler(req, res);
});

app.listen(port);
