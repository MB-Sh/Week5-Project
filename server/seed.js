import { db } from "./server.js";

// if we already have a table with the same name we need to make sure
// we dont create a new table with the same name

db.query(`CREATE TABLE IF NOT EXISTS preferences (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  preferences VARCHAR(100)

);`);

// db.query(`INSERT INTO preferences (username,preferences)
//   VALUES ('Yusef','dark')`);

// db.query(`SELECT * FROM preferences WHERE username = $1`, ["Mary"]);
// SELECT preferences FROM preferences WHERE username = 'Saarah'
