const express = require('express')
const path = require('path')
const publicPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates')
require("dotenv").config();

const port = process.env.PORT;

const app = express()
app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.use(express.static(publicPath))

app.get('/indicadores', (req, res)=>{
    res.render('index')
})

app.listen(port, ()=>{
    console.log('Server is up on port '+ port)
})