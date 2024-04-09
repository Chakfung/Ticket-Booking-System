const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.json());

routes(app);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log("收到请求体：", req.body);
  res.status(201).send();
});

app.put("/:id", (req, res) => {
  console.log("收到请求参数，id 为：", req.params.id);
  console.log("收到请求体：", req.body);

  res.send();
});

app.delete("/:id", (req, res) => {
  console.log("收到请求参数，id 为：", req.params.id);
  res.status(204).send();
});

app
  .listen(9000, () => {
    console.log("start success.");
  })
  .on("error", (e) => {
    console.error(e.code, e.message);
  });
