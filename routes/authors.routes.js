const express = require('express');
const authorsController = require("../controllers/authors.controller");
const router = express.Router();

router.get('/', authorsController.getAllAuthors);
router.get('/email', authorsController.getOneAuthor);
router.post('/', authorsController.createAuthor);
router.put('/', authorsController.updateAuthor);
router.delete('/email', authorsController.deleteAuthor);

module.exports = router;

// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/authors
// PUT http://localhost:3000/api/authors --> pasar JSON con búsqueda por title
// DELETE http://localhost:3000/api/authors?email=hola@gmail.com  --> Pasar JSON con búsqueda por title