export async function json(req, res) {
  const buffer = [];

  for await (const chunk of req) {
    buffer.push(chunk);
  }

  try {
    req.body = JSON.stringify(buffer.concat());
  } catch (error) {
    req.body = null;
  }

  res.setHeader("Content-type", "application/json");
}