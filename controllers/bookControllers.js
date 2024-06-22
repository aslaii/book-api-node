import books from '../models/bookModel.js';

export const createBook = (req, res) => {
  const { title, author, publishedDate, summary } = req.body;
  const book = { id: `${books.length + 1}`, title, author, publishedDate, summary };
  books.push(book);
  res.status(200).json(book);
};

export const getAllBooks = (req, res) => {
  res.status(200).json(books);
};

export const getBookById = (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).send('Book not found');
  res.status(200).json(book);
};

export const updateBook = (req, res) => {
  const book = books.find(b => b.id === req.params.id);
  if (!book) return res.status(404).send('Book not found');

  const { title, author, publishedDate, summary } = req.body;
  book.title = title;
  book.author = author;
  book.publishedDate = publishedDate;
  book.summary = summary;

  res.status(200).json(book);
};

export const deleteBook = (req, res) => {
  const bookIndex = books.findIndex(b => b.id === req.params.id);
  if (bookIndex === -1) return res.status(404).send('Book not found');

  const book = books.splice(bookIndex, 1);
  res.status(200).json(book);
};

