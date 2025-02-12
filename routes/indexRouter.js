const { Router } = require("express");
const express = require('express');
const app = express();
const indexRouter = Router();



app.set('view engine', 'ejs');

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
 ];

 indexRouter.get('/', (req, res) => {
   res.render("index", { title: "Mini Messageboard", messages: messages })
 });
 indexRouter.get('/new', (req, res) => {
    res.render('new')
 })
 module.exports = indexRouter;
