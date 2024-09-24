console.log("Testing");
import express from "express";
import cors from "cors";
import pg from "pg";
import dotenv from "dotenv";

// initialise express
const app = express();

// configure dotenv
dotenv.config();

// tell my express app to use json
app.use(express.json());

//tell my express app to use cors
app.use(cors());

// i need to set up a PORT for my app to listen
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server is running in PORT ${PORT}`);
});

// i need to set up my database pool using the connection string from the .env file
const dbConnectionString = process.env.DATABASE_URL;
export const db = new pg.Pool({
  connectionString: dbConnectionString,
});

// need to set up a a root route
app.get("/", (request, response) => {
  response.json({ message: "you are looking at my root route. how rude" });
});

//! in your CREATE route,  the request.body is an object that represents the form data coming from your client
// app.post("/add-data", function (request, response) {
//   const bodyData = request.body;
// });

// you need to use SQL queries and parameters in these routes
// GET route
app.get("/get-login", async (request, response) => {
  response.json({
    message: "you are looking at my new get endpoint. how rude",
  });
  const bodyData = request.body;
  console.log(bodyData);

  const query = await db.query(
    `SELECT preferences FROM preferences WHERE username = $1`,
    ["Mary"]
  );
  response.json(query.rows);
  console.log(response.json(query.rows));
});
