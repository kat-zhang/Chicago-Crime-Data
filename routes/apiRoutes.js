var db = require("../models");

module.exports = function(app) {
  app.get("/api/crimes", function(req, res) {
    console.log("We have our route");

    db.Crime.findOne({
      where: { Crime_ID: "10000094" }
    }).then(function(dbCrimes) {
      res.json(dbCrimes);
    });
  });

  app.get("/api/crime-data", function(req, res) {
    console.log("We have our route");

    db.Crime.findAll({}).then(function(dbCrimes) {
      res.json(dbCrimes);
    });
  });
};

//these are api routes
