const queries = {
    createEntry: `
        INSERT INTO entries(title,content,date,category) 
        VALUES ($1,$2,$3,`,
    getAllEntries: `
        SELECT e.title, e.content, e.date, e.category, a.name, a.surname, a.email, a.image
        FROM entries AS e
        INNER JOIN authors AS a 
        ON e.id_author = a.id_author;`,
    updateEntry: `
        UPDATE entries
        SET content= $2, date = $3, category = $4
        WHERE title = $1;`,
    deleteEntry: `
        DELETE
        FROM entries
        WHERE title = $1`,
}
// Publicarlo para que quien quiera haga un require y el nombre del fichero
module.exports = queries;