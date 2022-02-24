import "dotenv/config";
import express from "express";
import Rollbar from "rollbar";
const rollbar = new Rollbar({
  accessToken: process.env["ROLLBAR_ACCESS_TOKEN"] || "",
  captureUncaught: true,
  captureUnhandledRejections: true
});

const app = express();
const PORT = process.env["PORT"] || 3000;

app.get("/", (_req, res) => {
  rollbar.info("Hello world!");
  res.json({ hello: "world" });
});

// Use the rollbar error handler to send exceptions to your rollbar account
app.use(rollbar.errorHandler());

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
