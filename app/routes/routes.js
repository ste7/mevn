const express = require('express');
const router = express.Router();


const bookController = require('../controllers/bookController');


router.get('/books', bookController.get_books);
router.get('/book/:id', bookController.get_book);
router.post('/book/create', bookController.post_create);
router.get('/book/delete/:id', bookController.get_delete);


module.exports = router;