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
    console.log('conctado a put');
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
route.get('/:id', (req, res) => {
    const { id } = req.params;
    const sql = `SELECT * FROM peliculas WHERE id=${id}`;
    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result);
    });

})

route.put('/:id', (req, res) => {
    const id = req.params.id; 

    const {
        Titulo, Año, Director, Actores, Reseña, Imagen, Link
    } = req.body;

    const sql = `UPDATE peliculas SET
    Titulo = COALESCE(?, Titulo),
    Año = COALESCE(?, Año),
    Director = COALESCE(?, Director),
    Actores = COALESCE(?, Actores),
    Reseña = COALESCE(?, Reseña),
    Imagen = COALESCE(?, Imagen),
    Link = COALESCE(?, Link)
    WHERE id = ?`;

    db.query(sql, [Titulo, Año, Director, Actores, Reseña, Imagen, Link, id], (err, result) => {
        if (err) {
            console.error('Error al actualizar la película:', err); // Cambiar "error" a "err"
            res.status(500).json({ error: 'Ocurrió un error al actualizar la película' });
        } else {
            res.json({ message: 'Película actualizada exitosamente' });
        }
    });
});




module.exports=route;