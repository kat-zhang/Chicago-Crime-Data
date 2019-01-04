var db = require("../models");

module.exports = function(app) {
  //Battery from 2001-2018
  app.get("/api/battery-all", function(req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  //Battery from 2013-2018
  app.get("/api/battery-13", function(req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2013,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });
  app.get("/api/battery-14", function(req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2014,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/battery-15", function(req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2015,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/battery-16", function(req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2016,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/battery-17", function(req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2017,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/battery-18", function(req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2018,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  // app.get("/api/ncriminal", function(req, res) {
  //   console.log("We have our route");

  //   db.Crime.findAll({
  //     where: {
  //       PrimaryType: "NON-CRIMINAL"
  //     }
  //   }).then(function(dbCrimes) {
  //     res.json(dbCrimes);
  //   });
  // });

  //Count of all thefts from 2001-2018
  app.get("/api/theft-all", function(req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  //API Routes for thefts with arrests from 2013-2018

  app.get("/api/theft-13", function(req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2013,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/theft-14", function(req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2014,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/theft-15", function(req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2015,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/theft-16", function(req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2016,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/theft-17", function(req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2017,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/theft-18", function(req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2018,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  //Assault with arrest all years
  app.get("/api/assault-all", function(req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "ASSAULT",
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json(dbCrimes.count);
    });

    //Assault with arrest 2018
    app.get("/api/assault-18", function(req, res) {
      db.Crime.findAndCountAll({
        where: {
          PrimaryType: "ASSAULT",
          Year: 2018,
          Arrest: "TRUE"
        }
      }).then(function(dbCrimes) {
        res.json(dbCrimes.count);
      });

      //NARCOTICS AND CRIMINAL ARE NOT WORKING

      app.get("/api/narcotics-all", function(req, res) {
        db.Crime.findAndCountAll({
          where: {
            PrimaryType: "NARCOTICS",
            Arrest: "TRUE"
          }
        }).then(function(dbCrimes) {
          res.json(dbCrimes.count);
        });
      });

      app.get("/api/criminal", function(req, res) {
        db.Crime.findAll({
          where: {
            PrimaryType: "CRIMINAL DAMAGE",
            Year: 2018,
            Arrest: "TRUE"
          }
        }).then(function(dbCrimes) {
          res.json(dbCrimes);
        });
      });
    });
  });
};
