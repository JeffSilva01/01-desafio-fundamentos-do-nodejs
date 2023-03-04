import { buildQueryParams } from "./utils/build-query-params.js";

export const routes = [
  {
    method: "POST",
    path: buildQueryParams("/tasks"),
    handler: (req, res) => {
      res.writeHead(200).end("POST | /tasks");
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
