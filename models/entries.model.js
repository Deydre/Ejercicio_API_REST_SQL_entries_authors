const { Pool } = require('pg');
const queries = require('../queries/entries.queries') // Queries SQL

// LOs mimos datos que en pgAdmin
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    port: '5432',
    database: 'postgres',
    password: '<your_password>'
});

// GET ALL ENTRIES
const getAllEntries = async () => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAllEntries)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// CREATE
const createEntry = async (entry) => {
    const { title, content, email, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry, [title, content, email, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}


// updateEntry: `
// UPDATE entries
// SET title = $1, content= $2, date = $3, category = $4
// WHERE title = $5;`,

//UPDATE
const updateEntry = async (entry) => {
    const { title, content, date, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateEntry, [title, content, date, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
}

// DELETE
const deleteEntry = async (entryToDelete) => {
    let title = entryToDelete;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry, [title])
        result = data.rowCount
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
    getAllEntries,
    createEntry,
    updateEntry,
    deleteEntry
}

module.exports = entries;


// Pruebas

//  getEntriesByEmail("guillermu@thebridgeschool.es")
// .then(data=>console.log(data)) 


// getAllEntries()
// .then(data=>console.log(data))




// // PRUEBAS DE CREAR --> ESTO NO FUNCIONA!!!!!!!!!
// let newEntry = {
//     "title": "MACARRONES 34 CON TOMATE",
//     "content": "1234564756",
//     "date": "2024-10-22T22:00:00.000Z",
//     "category": "Comida"
// }

// createEntry(newEntry)
//     .then(data => console.log(data))

// ----------------------------------------------
// // PRUEBAS DE UPDATE  (FUNCIONA OK)
// let updatedEntry = {
//     "title": "MACARRONES 3 CON TOMATE",
//     "content": "NUEVO CONTENIDO EDITADITTO",
//     "date": "2024-10-22T22:00:00.000Z",
//     "category": "ComidaAAA"
// }

// // Aquí dentro habrá un INSERT INTO
// updateEntry(updatedEntry)
//     .then(data => console.log(data))

// // PRUEBAS DE BORRAR (FUNCIONA OK)
// deleteEntry("MACARRONES 3 CON TOMATE")
//     .then(data => console.log(data))
