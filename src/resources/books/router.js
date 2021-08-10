//Build the router for the Books resource

const express = require("express");

const booksRouter = express.Router();

const { findAll, getById, createOne, deleteOne } = require("./controller");

booksRouter.get("/", findAll);

booksRouter.get("/:id", getById);

booksRouter.post("/", createOne);

booksRouter.delete("/", deleteOne);

module.exports = booksRouter;
