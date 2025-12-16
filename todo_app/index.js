const express = require("express");

const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from todo app server\n");
});

const server = app.listen(PORT, () => {
  console.log(`Server started in port ${PORT}`);
});

const close = () => server.close(() => process.exit(0));
process.on("SIGTERM", close);
process.on("SIGINT", close);

