var db = require("knex")({
  client: "pg",
  version: "7.2",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "postgres",
    database: "manager"
  }
});

module.exports = db;
