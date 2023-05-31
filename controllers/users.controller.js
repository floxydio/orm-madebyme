const userRepo = require("../repository/users.repo");
const { UserEntities } = require("../entities/user.entities");

function findDataUser(req, res) {
  userRepo.findAll(function (err, result) {
    if (err) {
      return res.status(400).json("Something went wrong");
    } else {
      return res.status(200).json(result);
    }
  });
}

function createDatauser(req, res) {
  const data = UserEntities(req.body.nama, req.body.username);

  userRepo.create(data, function (err, result) {
    if (err) {
      return res.status(400).json("Something went wrong");
    } else {
      return res.status(200).json(result);
    }
  });
}

module.exports = { findDataUser, createDataUser };
