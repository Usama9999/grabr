"use strict";
const express = require("express");
var serverless = require("serverless-http");

const connection = require("./database");
const app = express();

app.get("/hello", function (req, res) {
  connection.query("select * from users", function (err, results, fields) {
    if (err) {
      return res.send(err);
    }
    return res.send(results);
  });
});
app.get("/usama", function (req, res) {
  return res.send("usamnna");
});
const PORT = 5000;
app.listen(PORT, "0.0.0.0", function () {
  console.log(`App Listening on port ${PORT}`);
});
module.exports.hello = serverless(app);
