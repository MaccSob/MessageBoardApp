const { Client } = require("pg");
const CONNECT_NAME = process.env.CONNECT_NAME;
require("dotenv").config();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 25 ),
  text VARCHAR (50),
  date TIMESTAMP,
);

INSERT INTO messages (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: CONNECT_NAME,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();