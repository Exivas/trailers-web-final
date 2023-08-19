const express = require('express');
const mysql = require('mysql2');
const route = express.Router();
route.use(express.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'trailers'
});

db.connect((err) => {
    if (err) {
        console.log(err);
    }
    console.log('conctado a search');
});


route.get('/', (req, res) => {
    const sql = 'SELECT * FROM peliculas';
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});

route.get('/:Titulo', (req, res) => {
    const Titulo = req.params.Titulo;
    const sql = 'SELECT * FROM peliculas WHERE Titulo like ?';
    db.query(sql, `%${Titulo}%`, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });
});
route.get('/publicacion/:year',(req,res)=>{
    const year=req.params.year;
    const sql='SELECT * FROM peliculas WHERE Año=?';
    db.query(sql,year,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    });
});
route.get('/actores/:Actores',(req,res)=>{
    const Actores=req.params.Actores;
    const sql='SELECT * FROM peliculas WHERE Actores like ?';
    db.query(sql,`%${Actores}%`,(err,result)=>{
        if(err){
            console.log(err);
        }
        res.send(result);
    });

})

module.exports = route;
