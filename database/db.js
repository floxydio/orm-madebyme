// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "testsequelize",
});

connection.connect((err) => {
  if (err) {
    console.log("DB Wan't Connect");
  } else [console.log("DB Connected")];
});

module.exports = { connection };
