const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const dropTableSql = "DROP TABLE IF EXISTS people";
connection.query(dropTableSql)

const createTableSql = "CREATE TABLE people (name VARCHAR(255))";
connection.query(createTableSql)

const name1 = `INSERT INTO people(name) values('Pedro Ramos')`
connection.query(name1)

const name2 = `INSERT INTO people(name) values('Geraldo Ramos')`
connection.query(name2)

const name3 = `INSERT INTO people(name) values('José Ramos')`
connection.query(name3)


// connection.end()


app.get('/', (req,res) => {
    connection.query("SELECT * FROM people", function (err, result, fields) {
        if (err) throw err;
        console.log(result[0].name);

        let names = "<ul>"
        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            names += "<li>"+element.name+"</li>";
        }
        names += "</ul>";
        res.send('<h1>Full Cycle Rocks!</h1>' + names);
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})