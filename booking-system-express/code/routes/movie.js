const express = require("express");
var route = express.Router();

const movieModel = require("../models/movie");

route.get("/", async (req, res) => {
  try {
    const movies = await movieModel.findAll();
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(404).send();
  }
});

route.post("/", async (req, res) => {
  try {
    console.log(req.body);
    await movieModel.save(req.body);
    res.status(201).json(req.body);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

route.put("/:id", async (req, res) => {
  try {
    const updateMovie = await movieModel.update(req.params.id, req.body);
    res.json(updateMovie);
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

route.delete("/:id", async (req, res) => {
  try {
    await movieModel.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).send();
  }
});

// route.delete("/:id/comment", async (req, res) => {
//   try {
//     await postModel.deleteCommentByUser(req.params.id, req.body.user);
//     res.status(204).send();
//   } catch (error) {
//     console.error(error);
//     res.status(500).send();
//   }
// });

module.exports = route;
