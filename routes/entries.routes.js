const express = require('express');
const entriesController = require("../controllers/entries.controller");
const router = express.Router();

router.get('/', entriesController.getEntries);
router.post('/', entriesController.createEntry);
router.put('/', entriesController.updateEntry);
router.delete('/', entriesController.deleteEntry);

module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
// PUT http://localhost:3000/api/entries --> pasar JSON con búsqueda por title
// DELETE http://localhost:3000/api/entries --> Pasar JSON con búsqueda por title