const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'test'
});
connection.connect((err) => {
    if (err) {
        throw err;
    }
});

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'publish')));
app.use(bodyParser.urlencoded({extended: false}));

app.get('/user', require('./public/register'));
app.get('/register', require('./public/registered'));
app.get('/login', require('./public/login'));
app.post('/logined', require('./public/logined'));
app.get('/allName', require('./public/allName'));
app.post('/updata', (req, res) => {
    connection.query('update test set user=?,password=? where id=?', [req.body.user, req.body.psw, req.body.id], (err, result) => {
        if (err) {
            throw err;
        }
        connection.query('select * from test', (err, result) => {
            if (err) {
                res.status(500).send('服务器异常!');
            } else {
                res.render('allName', {
                    data: result
                });
            }
        });
    });
});
app.post('/delet', (req, res) => {
    connection.query('delete from test where id=?', [req.body.id], (err, result) => {
        if (err) {
            throw err;
        }
        connection.query('select * from test', (err, result) => {
            if (err) {
                res.status(500).send('服务器异常!');
            } else {
                res.render('allName', {
                    data: result
                });
            }
        });
    });
});

app.listen(8080);