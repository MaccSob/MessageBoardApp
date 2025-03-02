require("dotenv").config();
const express = require('express');
const indexRouter = require("./routes/indexRouter");
const path = require('path');
const router = require('./routes/indexRouter');
const PORT = process.env.PORT;

const server = express();


server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));
server.use(express.static(path.join(__dirname, 'public')));
server.use(express.urlencoded({ extended: true }));



server.use("/", indexRouter);




server.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});