//Build the router for the Books resource

const express = require("express");

const booksRouter = express.Router();

const {
  findAll,
  getById,
  createOne,
  deleteOneById,
  ammendOneById,
} = require("./controller");

booksRouter.get("/", findAll);

booksRouter.get("/:id", getById);

booksRouter.post("/", createOne);

booksRouter.delete("/", deleteOneById);

booksRouter.patch("/:id", ammendOneById);

module.exports = booksRouter;
