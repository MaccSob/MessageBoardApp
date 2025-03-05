const { Pool } = require('pg');
require("dotenv").config();


// Database connection configuration
module.exports =  new Pool( {
  connectionString: process.env.CONNECT_NAME
});

