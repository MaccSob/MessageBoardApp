const { Router } = require("express");
const express = require('express');
const app2 = express();
const newRouter = Router();

app2.set('view engine', 'ejs');

newRouter.get('/new', (req, res) => {
    res.render('new')
 })
 module.exports = newRouter;