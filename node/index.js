const express = require('express')
const app = express()
const port = 3000
const config = { 
    host: 'mysql', 
    user: 'root', 
    password: 'root', 
    database: 'desafio'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config)
const insertPeople = `insert into people (name) values ('Wagner')`
const selectPeople = `select id, name from people`
app.get('/', async (req, res) => {
    retorno = '<h1>Full Cycle!</h1></br>'; 
    await connection.query(insertPeople);
    await connection.query(selectPeople, (err, result) => {
        retorno += '<pre>' + JSON.stringify(result) + '</pre>';
        res.send(retorno)
    });
});

async function getUsuarios(){
    console.log('momento 3')
} 

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})