const { Router } = require("express");
const express = require('express');
const app = express();
const indexRouter = Router();



app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));


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
   },
   {
   text: "Hey folks!",
   user: "Jacob",
   added: new Date()
   } 
];

 // GET ROUTERS
 indexRouter.get('/', (req, res) => {
   res.render("index", { title: "Mini Messageboard", messages: messages })
 });

 indexRouter.get("/new", function(req, res) {
    res.render("new", { title: "Create your message!" });
  });

  // POST ROUTERS

  indexRouter.post("/new", function(req, res ) {
      const data = req.body;

      console.log("Text: ", data.messageText);
      console.log("User: ", data.messageUser);
  
      res.send();

      messages.push({ text: req.body.messageText, user: req.body.messageUser, added: new Date() });






      res.redirect("/")
  });

 module.exports = indexRouter;