const movie = require("./movie");
const order = require("./order");

module.exports = (app) => {
  app.use("/movie", movie);
  app.use("/order", order);
};
