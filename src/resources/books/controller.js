const Book = require("./model");
const { findAllBooks, findBookById, createOneBook, deleteBook, ammendedBook } =
  Book();

function findAll(req, res) {
  findAllBooks((books) => {
    res.json({ All: books });
  });
}

function getById(req, res) {
  const bookId = req.params.id;
  findBookById(Number(bookId), (product) => {
    res.json({ product });
  });
}

function createOne(req, res) {
  const newBook = req.body;
  createOneBook(newBook, (createdBook) => {
    res.json({ Product: createdBook });
  });
}

function deleteOneById(req, res) {
  const bookId = req.params.id;
  deleteBook(bookId, (deletedBook) => {
    res.json({ msg: "you deleted a book arnt you clever" });
  });
}

function ammendOneById(req, res) {
  const bookId = req.params.id;
  const bookData = req.body;
  ammendedBook(bookId, bookData, (ammendedbook) => {
    res.json({ Book: ammendedbook });
  });
}

module.exports = { findAll, getById, createOne, deleteOneById, ammendOneById };
