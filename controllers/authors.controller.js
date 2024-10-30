const author = require('../models/authors.model'); // Importar el modelo de la BBDD

// DEVOLVER RUTAS
// GET http://localhost:3000/authors/ --> ALL
const getAllAuthors = async (req, res) => {
    let authors = await author.getAllAuthors(req.query);
    res.status(200).json(authors); // [] con las entries encontradas
}

// GET http://localhost:3000/authors/email?email=birja@thebridgeschool.es
const getOneAuthor = async (req, res) => {
    const {email} = req.query;
    let authors = await author.getOneAuthor(email);
    res.status(200).json(authors); // [] con las entries encontradas
}

// POST http://localhost:3000/api/authors/
const createAuthor = async (req, res) => {
    // if (body.clave && body.clave && body.clave){
        
    // }
    const newAuthor = req.body; // {name, surname, email, image}
    const response = await author.createEntry(newAuthor);
    res.status(201).json({
        message: `usuario creado: ${newAuthor}`,
        "items_created": response,
        data: newAuthor
    });
}

// PUT http://localhost:3000/api/authors/ 
// Devolver {message: "usuario actualizado: guillermu@thebridgeschool.es"}
const updateAuthor = async (req, res) => {
    const author = req.body; // {name, surname, email, image}
    const response = await author.updateAuthor(author);
    res.status(200).json({
        message: 'Autor actualizado',
        "items_deletedupdated": response,
    });
}

// DELETE http://localhost:3000/api/authors/ 
// Tiene que devolver {message: "Se ha borrado guillermu@thebridgeschool.es"}
const deleteAuthor = async (req, res) => {
    const email = req.body; // {email}
    const response = await author.deleteAuthor(email);
    res.status(200).json({
        message: `Se ha "borrado" ${email}`,
        "items_updated": response,
    });
}


module.exports = {
    getAllAuthors,
    getOneAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}


