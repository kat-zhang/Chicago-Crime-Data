var db = require("../models");

var NodeGeocoder = require('node-geocoder');

var options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: 'AIzaSyBcHGLeUR1F3qAxIajfHnA6Keusx1e-3SA',
  formatter: null
};
var geocoder = NodeGeocoder(options);


module.exports = function (app) {
  // app.post('/api/comments', function(req, res){
  app.post('/comments', function(req, res){

    console.log('WE ARE IN COMMENTS ROUTE!!', req.body)

    db.Comment.create(req.body)

  })

  // app.get("/comments", function (req,res) {
  //   db.Comment.findAll({
  //     where: {
  //       id: 
  //       author: "author",
  //       comment: "comment"


  //     }
  //   })
  // })

  //Battery from 2001-2018
  app.get("/api/battery-all", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  //Battery from 2013-2018
  app.get("/api/battery-13", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2013,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });
  app.get("/api/battery-14", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2014,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/battery-15", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2015,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/battery-16", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2016,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/battery-17", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2017,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/battery-18", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "BATTERY",
        Year: 2018,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  //Count of all thefts from 2001-2018
  app.get("/api/theft-all", function (req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  //API Routes for thefts with arrests from 2013-2018

  app.get("/api/theft-13", function (req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2013,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/theft-14", function (req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2014,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/theft-15", function (req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2015,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/theft-16", function (req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2016,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/theft-17", function (req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2017,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/theft-18", function (req, res) {
    console.log("We have our route");

    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "THEFT",
        Year: 2018,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  //Assault with arrest all years
  app.get("/api/assault-all", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "ASSAULT",
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });
  //Assault with arrest 2018
  app.get("/api/assault-18", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "ASSAULT",
        Year: 2018,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/narcotics-all", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "NARCOTICS",
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/narcotics-13", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "NARCOTICS",
        Year: 2013,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/narcotics-14", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "NARCOTICS",
        Year: 2014,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/narcotics-15", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "NARCOTICS",
        Year: 2015,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/narcotics-16", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "NARCOTICS",
        Year: 2016,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/narcotics-17", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "NARCOTICS",
        Year: 2017,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/narcotics-18", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "NARCOTICS",
        Year: 2018,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  //Robbery

  app.get("/api/robbery-all", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "ROBBERY",
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });
  app.get("/api/robbery-13", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "ROBBERY",
        Year: 2013,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });
  app.get("/api/robbery-14", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "ROBBERY",
        Year: 2014,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });
  app.get("/api/robbery-15", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "ROBBERY",
        Year: 2015,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });
  app.get("/api/robbery-16", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "ROBBERY",
        Year: 2016,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/robbery-17", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "ROBBERY",
        Year: 2017,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.get("/api/robbery-18", function (req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: "ROBBERY",
        Year: 2018,
        Arrest: "TRUE"
      }
    }).then(function (dbCrimes) {
      res.json(dbCrimes.count);
    });
  });

  app.post("/test", function (req, res) {
    console.log(req.body);

    var address = req.body.address
    geocoder.geocode(address, function (err, data) {
      if (err || !data.length) {
        console.log(err);
        req.flash('error', 'Invalid address');
        return res.redirect('back');
      }
      var lat = data[0].latitude;
      var lng = data[0].longitude;
      // var location = data[0].formattedAddress;
      res.json({ lat, lng });
    })
  })
};
