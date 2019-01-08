var db = require("../models");

var NodeGeocoder = require("node-geocoder");

var options = {
  provider: "google",
  httpAdapter: "https",
  apiKey: "AIzaSyBcHGLeUR1F3qAxIajfHnA6Keusx1e-3SA",
  formatter: null
};

var geocoder = NodeGeocoder(options);

module.exports = function(app) {
  app.post("/api/comments", function(req, res) {
    console.log("New comment", req.body);
    db.Comment.create({
      author: req.body.author,
      comment: req.body.comment
    }).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  app.get("/api/comments", function(req, res) {
    db.Comment.findAll({}).then(function(dbComment) {
      res.json(dbComment);
    });
  });

  app.get("/comments", function(req, res) {
    db.Comment.findAll({}).then(function(data) {
      res.render("comments", { comments: data });
    });
  });

  app.get("/api/crimes/:crime", function(req, res) {
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: req.params.crime,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      console.log(dbCrimes.count);
      res.json({
        data: {
          count: dbCrimes.count,
          crime: req.params.crime
        }
      });
    });
  });

  app.get("/api/crimes/:crime/:year", function(req, res) {
    console.log("this route is working");
    console.log(req.params.crime, req.params.year);
    db.Crime.findAndCountAll({
      where: {
        PrimaryType: req.params.crime,
        Year: req.params.year,
        Arrest: "TRUE"
      }
    }).then(function(dbCrimes) {
      res.json({
        data: {
          count: dbCrimes.count,
          crime: req.params.crime,
          year: req.params.year
        }
      });
    });
  });

  var crime = [];
  var arr = [];
  app.post("/test", function(req, res) {
    var address = req.body.address;
    geocoder.geocode(address, function(err, data) {
      if (err || !data.length) {
        console.log(err);
        req.flash("error", "Invalid address");
        return res.redirect("back");
      }
      var lat = data[0].latitude;
      var lng = data[0].longitude;
      var zip = data[0].zipcode;

      db.Crime.findAll({
        where: {
          zipCode: parseInt(zip)
        },
        limit: 20
      }).then(function(data) {
        arr = [];
        crime = [];
        for (var i = 0; i < data.length; i++) {
          var Lat = data[i].Latitude;
          var Lng = data[i].Longitude;
          arr.push({ Lat, Lng });
          var type = data[i].PrimaryType;
          var description = data[i].Description;
          var location = data[i].LocationDescription;
          var arrest = data[i].Arrest;
          crime.push({ type, description, location, arrest });
        }
      });
      res.json({ lat, lng });
    });
  });

  app.get("/crimePoints", function(req, res) {
    res.json(arr);
  });

  app.get("/crime", function(req, res) {
    res.json(crime);
  });
};
