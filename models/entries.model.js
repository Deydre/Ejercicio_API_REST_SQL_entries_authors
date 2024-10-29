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

// GET
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
    const { title, content, date, category } = entry;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createEntry,[title, content, date, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteEntry = async (entryToDelete) => {
    let title = entryToDelete;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteEntry,[title])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result;
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
        const data = await client.query(queries.updateEntry,[title, content, date, category])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// -------------------------

const entries = {
    getAllEntries,
    createEntry,
    deleteEntry,
    updateEntry
}

module.exports = entries;


// Pruebas

    //  getEntriesByEmail("guillermu@thebridgeschool.es")
    // .then(data=>console.log(data)) 



// getAllEntries()
// .then(data=>console.log(data))



//  let newEntry = {
//     title: "Se acabaron las mandarinas de TB",
//     content: "Corren rumores de que papa noel tenía un saco vacio y lo llenó",
//     email: "guillermu@thebridgeschool.es",
//     category: "sucesos"
// }

// // Aquí dentro habrá un INSERT INTO
// createEntry(newEntry)
//     .then(data => console.log(data)) 