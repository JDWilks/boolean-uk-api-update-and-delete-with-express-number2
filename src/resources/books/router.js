//Build the router for the Books resource

const express = require("express");

const booksRouter = express.Router();

const { findAll, getById, createOne, deleteOneById } = require("./controller");

booksRouter.get("/", findAll);

booksRouter.get("/:id", getById);

booksRouter.post("/", createOne);

booksRouter.delete("/", deleteOneById);

module.exports = booksRouter;
