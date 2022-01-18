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

// var sql = "CREATE TABLE people (name VARCHAR(255))";
// connection.query(sql)

// const sql2 = `INSERT INTO people(name) values('Pedro Ramos')`
// connection.query(sql2)

// connection.end()


app.get('/', (req,res) => {
    console.log("CHEGUEI AQUI");
    connection.connect(function(err) {
        if (err) throw err;
        connection.query("SELECT * FROM people", function (err, result, fields) {
            if (err) throw err;
            console.log(result[0].name);

            let names = "<ul>"
            for (let i = 0; i < result.length; i++) {
                const element = result[i];
                names += "<li>"+element.name+"</li>";
            }
            names += "</ul>";
            res.send('<h1>Desafio 2: NGINX com NODEJS</h1>' + names);
        });
    });
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})