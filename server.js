const express = require('express');
const indexRouter = require("./routes/indexRouter");
const newRouter = require('./routes/newRouter');

const server = express();


server.set('view engine', 'ejs');
server.use("/", indexRouter);
server.use("/new", newRouter);




const PORT = 3000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});