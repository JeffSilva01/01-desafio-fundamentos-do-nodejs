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

    if (taskIndex <= -1) {
      throw new Error("no task was found with that id");
    }

    this.#database[taskIndex] = {
      ...this.#database[taskIndex],
      updated_at: new Date(),
      title: title ? title : this.#database[taskIndex].title,
      description: description
        ? description
        : this.#database[taskIndex].description,
    };

    this.#persist();

    return this.#database[taskIndex];
  }

  delete({ id }) {
    const taskIndex = this.#database.findIndex((task) => task.id === id);

    if (taskIndex <= -1) {
      throw new Error("no task was found with that id");
    }

    this.#database.splice(taskIndex, 1);

    this.#persist();
  }

  complete({ id }) {
    const taskIndex = this.#database.findIndex((task) => task.id === id);

    if (taskIndex <= -1) {
      throw new Error("no task was found with that id");
    }

    this.#database[taskIndex] = {
      ...this.#database[taskIndex],
      completed_at: new Date(),
    };

    this.#persist();

    return this.#database[taskIndex];
  }
}
