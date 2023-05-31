const express = require("express");
const app = express();

const port = 2500;

const userController = require("./controllers/users.controller");

app.get("/", function (req, res) {
  return res.send("HLO");
});

app.get("/user", userController.findDataUser);
app.post("/user", userController.createDataUser)

app.get("/get-user", async function (req, res) {});

app.listen(port, () => {});
