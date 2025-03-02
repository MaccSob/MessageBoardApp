const { Client } = require('pg');
const fs = require('fs');

// Database connection configuration
const dbConfig = {
  user: DATABASE_USER,
  host: DATABASE_HOST,
  database: DATABASE_NAME,
  password: DATABASE_PASSWORD,
  port: 5432, 
};

