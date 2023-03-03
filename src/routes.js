export const routes = [
  {
    method: "POST",
    path: "/tasks",
    handler: (req, res) => {
      res.writeHead(200).end("POST | /tasks");
    },
  },
  {
    method: "GET",
    path: "/tasks",
    handler: (req, res) => {
      res.writeHead(200).end("GET | /tasks");
    },
  },
  {
    method: "PUT",
    path: "/tasks/:id",
    handler: (req, res) => {
      res.writeHead(200).end("PUT | /tasks/:id");
    },
  },
  {
    method: "DELETE",
    path: "/tasks/:id",
    handler: (req, res) => {
      res.writeHead(200).end("DELETE | /tasks/:id");
    },
  },
  {
    method: "PATCH",
    path: "/tasks/:id/complete",
    handler: (req, res) => {
      res.writeHead(200).end("PATCH | /tasks/:id/complete");
    },
  },
];
