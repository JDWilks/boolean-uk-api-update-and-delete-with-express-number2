const Book = require("./model");
const { findAllBooks, findBookById } = Book();

function findAll(req, res) {
  const books = req.body;
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
  res.json({ Product: createdProduct });
}

function deleteOne(req, res) {
  res.json({ Deleted: oneproduct });
}

module.exports = { findAll, getById, createOne, deleteOne };
//
//
