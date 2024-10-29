const entry = require('../models/entries.model'); // Importar el modelo de la BBDD

// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por TITLE
const getEntries = async (req, res) => {
        let entries = await entry.getAllEntries(req.query);
    res.status(200).json(entries); // [] con las entries encontradas
}

// Borrar
const deleteEntry = async (req, res) => {
    const title = req.body.title; // {title,content,email,category}
    const response = await entry.deleteEntry(title);
    res.status(201).json({
        "item_deleted": response,
        message: `Se ha borrado la entry: ${title}`,
        data: response
    });
}
// POR MIRAR
// Crear entry por email
const updateEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.updateEntry(newEntry);
    res.status(201).json({
        "items_updated": response,
        data: newEntry
    });
}

//createEntry
// POST http://localhost:3000/api/entries
// let newEntry = {
//     title:"noticia desde Node",
//     content:"va a triunfar esto2",
//     email:"alejandru@thebridgeschool.es",
//     category:"sucesos"}

// Crear entry por email
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}

module.exports = {
    getEntries,
    createEntry,
    deleteEntry,
    updateEntry
}