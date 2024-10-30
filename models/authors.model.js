
const { Pool } = require('pg');
const queries = require('../queries/authors.queries') // Queries SQL

// LOs mimos datos que en pgAdmin
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '<your_password>'
});

// GET AUTHORS
const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// GET ONE AUTHOR
const getOneAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getOneAuthor, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE AUTHOR
const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// UPDATE AUTHOR
const updateAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor, [name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

// DELETE AUTHOR
const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}
// -------------------------

const entries = {
    getAllAuthors,
    getOneAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor
}

module.exports = entries;

// ---------------- PRUEBAS ----------------
// -- GET (FUNCINA OK)
// http://localhost:3000/api/authors
// getAllAuthors()
// .then(data=>console.log(data))

// -- GET 1 AUTHOR (FUNCIONA OK)
// http://localhost:3000/api/authors?email=birja@thebridgeschool.es
// getOneAuthor("birja@thebridgeschool.es")
//     .then(data=>console.log(data)) 

// -- POST NEW AUTHOR (FUNCIONA OK)
// http://localhost:3000/api/authors/ 
// let newAuthor = {
//     "name": "Nuevo",
//     "surname": "autor",
//     "email": "neuvoautor@gmail.com",
//     "image": "https://randomuser.me/api/portraits/thumb/men/60.jpg"
// }

// createAuthor(newAuthor)
//     .then(data => console.log(data))

// -- PUT (UPDATE AUTHOR)  
// let updatedAuthor = {
//     "name": "Alejandru",
//     "surname": "Regex22",
//     "email": "asjkfkjsaf",
//     "image": "www.gatitos.com"
// }

// updateAuthor(updatedAuthor)
//     .then(data => console.log(data))

// // PRUEBAS DE BORRAR (FUNCIONA OK)
// deleteAuthor("muchelle@thebridgeschool.es")
//     .then(data => console.log(data))