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
      const tasks = database.select();
      res.writeHead(200).end(JSON.stringify(tasks));
    },
  },
  {
    method: "PUT",
    path: buildQueryParams("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;
      const { title, description } = req.body;

      if (!title && !description) {
        res
          .writeHead(400)
          .end(
            "Você precisa enviar pelo menos um dos seguintes campos: 'titel' ou 'descrição'"
          );
        return;
      }

      try {
        const task = database.update({ id, data: { title, description } });
        res.writeHead(200).end(JSON.stringify(task));
      } catch (error) {
        res.writeHead(500).end(error.message);
      }
    },
  },
  {
    method: "DELETE",
    path: buildQueryParams("/tasks/:id"),
    handler: (req, res) => {
      const { id } = req.params;

      try {
        database.delete({ id });
        res.writeHead(201).end();
      } catch (error) {
        res.writeHead(500).end(error.message);
      }
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
