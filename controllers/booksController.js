const booksModel = require("../models/booksModel");

module.exports = {
  addBooks: async (req, res) => {
    try {
      const book = await booksModel.create({
        book_name: req.body.book_name,
        author: req.body.author,
        publish_year: req.body.publish_year,
        category: req.body.category,
      });
      await book.save();
      res.status(201).send("Book added success..!!");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getBooks: async (req, res) => {
    try {
      const books = await booksModel.find({});
      if (books) {
        res.status(200).send(books);
      } else {
        throw error;
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  updateBook: async (req, res) => {
    try {
      const update_book = await booksModel.updateOne(
        { _id: req.query.id },
        {
          $set: {
            book_name: req.body.book_name,
            author: req.body.author,
            publish_year: req.body.publish_year,
            category: req.body.category,
          },
        }
      );
      if (update_book.modifiedCount >= 1) {
        res.status(204).send("Update success..!!");
      } else {
        throw error;
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  deleteBook: async (req, res) => {
    try {
      const deleted_book = await booksModel.deleteOne({
        _id: req.query.id,
      });
      if (deleted_book["deletedCount"] >= 1) {
        res.status(200).send("Delete Success..!!");
      } else {
        throw error;
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
