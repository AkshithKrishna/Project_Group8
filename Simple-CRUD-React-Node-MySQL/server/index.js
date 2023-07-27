const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

// Function to execute a SQL query
function executeQuery(query) {
  return new Promise((resolve, reject) => {
    db.query(query, (error, results) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
}

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "root",
  database: "rentals",
});
