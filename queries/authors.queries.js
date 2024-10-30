const queries = {
    getAllAuthors: `
        SELECT *
        FROM authors
        WHERE active = '0'`,
    getOneAuthor: `
        SELECT *
        FROM authors WHERE email = $1`,
    createAuthor: `
        INSERT INTO authors (name, surname, email, image, active)
        VALUES ($1, $2, $3, $4, '0')`,
    updateAuthor: `
        UPDATE authors
        SET surname= $2, email = $3, image = $4, active = '0'
        WHERE name = $1;`,
    deleteAuthor: `
        UPDATE authors
        SET active = '1'
        WHERE email= $1`
}
// Publicarlo para que quien quiera haga un require y el nombre del fichero
module.exports = queries;