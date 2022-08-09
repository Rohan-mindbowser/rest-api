const router = require("express").Router();

const booksController = require("../controllers/booksController");

//route for getting all the books
router.get("/getbooks", booksController.getBooks);

//route for adding a book
router.post("/addbooks", booksController.addBooks);

//route for updating book details
router.patch("/updatebooks",booksController.updateBook);

//route for deleting a book
router.delete("/deletebooks",booksController.deleteBook);

//Exporting routes
module.exports = router;
