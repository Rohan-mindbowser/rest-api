const router = require("express").Router();

//route for getting all the books 
router.get("/getbooks");

//route for adding a book
router.post("/addbooks");

//route for updating book details
router.patch("/updatebooks");

//route for deleting a book
router.delete("/deletebooks");



//Exporting routes
module.exports = router;