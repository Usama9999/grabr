var mysql = require("mysql");
var bluebird = require("bluebird");

var connection = mysql.createPool({
  host: "amirazz.c86iavjjrnis.eu-west-1.rds.amazonaws.com",
  database: "amirazz",
  user: "admin",
  password: "admin123",
  charset: "utf8mb4",
  multipleStatements: true,
  timezone: "utc+00",

  // socketPath: "/cloudsql/healercare-b6b7f:us-central1:talentogram-db",
});

// var connection = mysql.createPool({
//   host: "localhost",
//   database: "amirazz",
//   user: "root",
//   password: "usama",
//   charset: "utf8mb4",
//   multipleStatements: true,
// });
// // cloudinary.config({

connection.query = bluebird.promisify(connection.query);
module.exports = connection;
