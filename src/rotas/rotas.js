const express = require('express')
const app = express();
const rotas = express.Router();
const path = require('path')

app.use(express.json())



app.use(express.static(path.join(__dirname, '../public')));


rotas.get('/', function (req, res) {
    res.redirect('/users/login');
});

rotas.get('/users/login', function (req, res) {
    res.render(path.join(__dirname, "../public/login.html"))
});

rotas.get('/users/dashboard',  (req, res) => {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"))
});


rotas.post('/users/login', function (req, res) {
    res.redirect('/users/dashboard');
});



module.exports = rotas