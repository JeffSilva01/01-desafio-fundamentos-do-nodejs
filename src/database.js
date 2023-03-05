import fs from "node:fs/promises";
import { randomUUID } from "node:crypto";

const databasePath = new URL("../db.json", import.meta.url);

export class Database {
  #database = [];

  constructor() {
    fs.readFile(databasePath, "utf8")
      .then((file) => {
        this.#database = JSON.parse(file);
      })
      .catch(() => this.#persist());
  }

  #persist() {
    fs.writeFile(databasePath, JSON.stringify(this.#database));
  }

  insert({ title, description }) {
    const task = {
      id: randomUUID(),
      title,
      description,
      created_at: new Date(),
      updated_at: new Date(),
      completed_at: null,
    };

    this.#database.push(task);
    this.#persist();

    return task;
  }

  select() {
    return this.#database;
  }

  update({ id, data }) {
    const { title, description } = data;

    const taskIndex = this.#database.findIndex((task) => task.id === id);

    if (!taskIndex) {
      throw new Error("no task was found with that id");
    }

    this.#database[taskIndex] = {
      ...this.#database[taskIndex],
      ...(title && title),
      ...(description && description),
    };

    this.#persist();

    return this.#database[taskIndex];
  }

  delete({ id }) {
    const taskIndex = this.#database.findIndex((task) => task.id === id);

    if (!taskIndex) {
      throw new Error("no task was found with that id");
    }

    this.#database.splice(taskIndex, 1);

    this.#persist();
  }
}
