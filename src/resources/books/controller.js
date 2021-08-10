const Book = require("./model");
const { findAllBooks, findBookById, createOneBook, deleteBook } = Book();

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

module.exports = { findAll, getById, createOne, deleteOneById };
