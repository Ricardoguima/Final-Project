// Import all server modules
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

//express setup
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan("combined"));
app.listen(8081, () => {
  console.log("server is running on port: 8081");
});

// MySQL setup
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ExpenseDB",
  });

// open the MySQL connection
connection.connect((error) => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });

// Express API endpoint
  app.get("/expense", (req, res) => {
    console.log(req.query.expenseid);
    var query;
    if (req.query.expenseid)
      query =
        "SELECT * FROM Expense WHERE ExpenseId = " +
        "'" +
        req.query.expenseid +
        "'";
    else query = "SELECT * FROM Expense";
    connection.query(query, (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Expense: ", data);
      res.json(data);
    });
});

app.post("/newexpense", (req, res) => {
    connection.query("INSERT INTO Expense SET ?", req.body, (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("newexpense: ", data);
      res.json(data);
    });
  });