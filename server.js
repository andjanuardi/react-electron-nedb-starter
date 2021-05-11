const express = require("express");
const cors = require("cors");
const Datastore = require("nedb");

const app = express();
const port = 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));

const db = new Datastore("db/database.db");

app.get("/", cors(), (req, res) => {
  db.loadDatabase();
  db.find({}, function (err, data) {
    res.json(data);
  });
});
