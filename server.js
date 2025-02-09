const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render('index')
 });
 app.get('/new', (req, res) => {
    res.render('new')
 })


app.listen(3000, () => console.log('Server Started'))