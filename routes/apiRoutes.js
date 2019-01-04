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

  app.get("/api/ncriminal", function(req, res) {
    console.log("We have our route");

    db.Crime.findAll({
      where: {
        PrimaryType: "NON-CRIMINAL"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes);
    });
  });

  app.get("/api/theft-2017", function(req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2017,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      console.log(dbCrimes.count);

      res.json(dbCrimes.count);
    });
  });

  // app.get("/api/assault", function(req, res) {
  //   db.Crime.findAll({
  //     where: { PrimaryType: "ASSAULT" }
  //   }).then(function(dbCrimes) {
  //     res.json(dbCrimes);
  //   });

  //   app.get("/api/narcotics", function(req, res) {
  //     db.Crime.findAll({
  //       where: { PrimaryType: "NARCOTICS" }
  //     }).then(function(dbCrimes) {
  //       res.json(dbCrimes);
  //     });
  //   });

  //   app.get("/api/criminal", function(req, res) {
  //     db.Crime.findAll({
  //       where: { PrimaryType: "CRIMINAL DAMAGE" }
  //     }).then(function(dbCrimes) {
  //       res.json(dbCrimes);
  //     });
  //   });
  // });
};
