const entry = require('../models/entries.model'); // Importar el modelo de la BBDD

// DEVOLVER RUTAS
// GET http://localhost:3000/entries --> ALL
// GET http://localhost:3000/entries?email=hola@gmail.com --> por TITLE
const getEntries = async (req, res) => {
    let entries = await entry.getAllEntries(req.query);
    res.status(200).json(entries); // [] con las entries encontradas
}

// CREAR
const createEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,date,category}
    const response = await entry.createEntry(newEntry);
    res.status(201).json({
        "items_created": response,
        data: newEntry
    });
}


// ACTUALIZAR
const updateEntry = async (req, res) => {
    const newEntry = req.body; // {title,content,email,category}
    const response = await entry.updateEntry(newEntry);
    res.status(200).json({
        message: 'Entrada actualizada',
        "items_updated": response,
        data: newEntry
    });
}

// BORRAR
const deleteEntry = async (req, res) => {
    const title = req.body.title; // {title,content,email,category}
    const response = await entry.deleteEntry(title);
    res.status(201).json({
        "item_deleted": response,
        message: `Se ha borrado la entry: ${title}`,
        data: response
    });
}

module.exports = {
    getEntries,
    createEntry,
    deleteEntry,
    updateEntry
}


