const { Pool } = require("pg");
require("dotenv/config");

let poolPromise = new Pool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  ssl: { rejectUnauthorized: false },
});

poolPromise
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connections error", err.stack));

module.exports = { poolPromise };
