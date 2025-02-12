const express = require('express');
const indexRouter = require("./routes/indexRouter");

const server = express();


server.set('view engine', 'ejs');
server.use("/", indexRouter);


server.listen(5000, () => console.log('Server Started'))