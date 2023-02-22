// const Pool = require("pg").Pool;
const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "kukjinkim",
  password: "7789295951r",
  post: 5432,
  database: "perntodo",
});

module.exports = pool;
