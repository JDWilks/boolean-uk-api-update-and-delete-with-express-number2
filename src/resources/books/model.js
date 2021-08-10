const db = require("../../utils/database");
const { buildBooksDatabase } = require("../../utils/mockData");

function Book() {
  function createTable() {
    const sql = `
      DROP TABLE books;
      
      CREATE TABLE IF NOT EXISTS books (
        id              SERIAL        PRIMARY KEY,
        title           VARCHAR(255)   NOT NULL,
        type            VARCHAR(255)   NOT NULL,
        author          VARCHAR(255)   NOT NULL,
        topic           VARCHAR(255)   NOT NULL,
        publicationDate DATE           NOT NULL
      );
    `;

    db.query(sql)
      .then((result) => console.log("[DB] Book table ready."))
      .catch(console.error);
  }

  function mockData() {
    const createBook = `
      INSERT INTO books
        (title, type, author, topic, publicationDate)
      VALUES
        ($1, $2, $3, $4, $5)
    `;

    const books = buildBooksDatabase();

    books.forEach((book) => {
      db.query(createBook, Object.values(book)).catch(console.error);
    });
  }

  // function findAllBooks(callbackfunction) {
  //   const sql = `
  //   SELECT * FROM books
  //   RETURNING *
  //   `;
  //   db.query(sql)
  //     .then((result) => {
  //       callbackfunction(result.rows);
  //     })
  //     .catch(console.error);
  // }

  function findBookById(bookId, callbackfunction) {
    const sql = `
    SELECT * FROM products
    WHERE ID = ($1);
    `;
    dbClient
      .query(sql, [bookId])
      .then((result) => {
        callbackfunction(result.rows[0]);
      })
      .catch(console.error);
  }

  createTable();
  mockData();

  return {
    // findAllBooks,
    findBookById,
  };
}

module.exports = Book;
