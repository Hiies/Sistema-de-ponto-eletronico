require('dotenv').config({path: __dirname + '/.env'})
const express = require('express');
const app = express();
const port = process.env.PORT
const rotas = require('./rotas/rotas.js')
app.engine('html', require('ejs').renderFile);

app.use("/", rotas)

app.use(express.static('public'))




app.listen(port)
console.log(`http://localhost:${port}/`);