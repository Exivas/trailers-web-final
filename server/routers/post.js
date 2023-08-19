const express = require('express');
const mysql = require('mysql2');
const route=express.Router();
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
    console.log('conctado a post');
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

route.post('/', (req, res) => {
    const{Titulo,Año,Director,Actores,Reseña,Imagen,Link}=req.body;
    const sql = 'INSERT INTO peliculas (Titulo,Año,Director,Actores,Reseña,Imagen,Link) VALUES (?,?,?,?,?,?,?)';
    db.query(sql, [Titulo,Año,Director,Actores,Reseña,Imagen,Link], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al agregar película a la base de datos' });
        } else {
            res.status(201).json({ message: 'Película agregada exitosamente' });
        }
    })
})

module.exports=route;
