import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "Airbnb",
});

export default pool.promise();
