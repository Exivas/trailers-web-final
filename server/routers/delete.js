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
    console.log('conctado a delete');
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

route.delete('/:id', (req, res) => {
    const id = req.params.id;

    const sql = 'DELETE FROM peliculas WHERE id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Error al eliminar la película' });
        } else {
            res.json({ message: 'Película eliminada exitosamente' });
        }
    });
});

module.exports=route;