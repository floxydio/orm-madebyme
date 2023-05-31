const db = require("../database/db");

function findAll(callback) {
  db.connection.query("SELECT * FROM users", function (err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
}

function create(body, callback) {
  db.connection.query(
    `INSERT INTO users(name,username) VALUES ('${body.name}', '${body.username}')`,
    function (err, result) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, result);
      }
    }
  );
}

module.exports = { findAll, create };
