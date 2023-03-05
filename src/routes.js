import { buildQueryParams } from "./utils/build-query-params.js";
import { Database } from "./database.js";

const database = new Database();

export const routes = [
  {
    method: "POST",
    path: buildQueryParams("/tasks"),
    handler: (req, res) => {
      const { title, description } = req.body;
      if (!title || !description) {
        res
          .writeHead(400)
          .end("Os campos titulo e descrição são obrigatórios.");
        return;
      }

      const task = database.insert({ title, description });
      res.writeHead(200).end(JSON.stringify(task));
    },
  },
  {
    method: "GET",
    path: buildQueryParams("/tasks"),
    handler: (req, res) => {
      res.writeHead(200).end("GET | /tasks");
    },
  },
  {
    method: "PUT",
    path: buildQueryParams("/tasks/:id"),
    handler: (req, res) => {
      res.writeHead(200).end("PUT | /tasks/:id");
    },
  },
  {
    method: "DELETE",
    path: buildQueryParams("/tasks/:id"),
    handler: (req, res) => {
      res.writeHead(200).end("DELETE | /tasks/:id");
    },
  },
  {
    method: "PATCH",
    path: buildQueryParams("/tasks/:id/complete"),
    handler: (req, res) => {
      res.writeHead(200).end("PATCH | /tasks/:id/complete");
    },
  },
];
