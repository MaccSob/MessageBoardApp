const { Pool } = require('pg');

// Database connection configuration
module.exports =  new Pool( {
  user: DATABASE_USER,
  host: DATABASE_HOST,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
  port: 5432, 
});

