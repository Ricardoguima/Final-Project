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

  app.get("/category", (req, res) => {
    console.log(req.query.categoryid);
    var query;
    if (req.query.categoryid)
      query =
        "SELECT * FROM Category WHERE CategoryId = " +
        "'" +
        req.query.categoryid +
        "'";
    else query = "SELECT * FROM Category";
    connection.query(query, (err, data) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      console.log("Category: ", data);
      res.json(data);
    });
});
app.get("/sub_category", (req, res) => {
  console.log(req.query.sub_categoryid);
  var query;
  if (req.query.sub_categoryid)
    query =
      "SELECT * FROM Sub_Category WHERE Sub_CategoryId = " +
      "'" +
      req.query.sub_categoryid +
      "'";
  else query = "SELECT * FROM Sub_Category";
  connection.query(query, (err, data) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Sub_Category: ", data);
    res.json(data);
  });
});

app.get("/cost", (req, res) => {
  console.log(req.query.CostSum);
  var query;
  if (req.query.CostSum)
    query =
      "SELECT SUM(Cost) FROM Expense" +
      req.query.CostSum +
      "'";
  else query = "SELECT SUM(Cost) FROM Expense";
  connection.query(query, (err, data) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("Cost: ", data);
    res.json(data);
  });
});


