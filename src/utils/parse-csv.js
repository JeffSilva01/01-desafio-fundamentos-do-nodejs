import { parse } from "csv-parse";
import fs from "node:fs";

const filePath = new URL("../../dados.csv", import.meta.url);

(async () => {
  let firstRun = true;

  const readStream = fs
    .createReadStream(filePath, { encoding: "utf8" })
    .pipe(parse());

  for await (const chunk of readStream) {
    const [title, description] = chunk;

    if (firstRun) {
      firstRun = false;
      continue;
    }

    fetch("http://localhost:3333/tasks", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
    });
  }
})();
