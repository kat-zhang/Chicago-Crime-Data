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
    console.log("WE ARE IN COMMENTS ROUTE!!", req.body);

    db.Comment.create(req.body);
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
      console.log(res.data.crime);
    });
  });

  app.get("/api/crimes/:crime/:year", function(req, res) {
    console.log("this route is working");

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

  app.post("/test", function(req, res) {
    console.log(req.body);

    var address = req.body.address;
    geocoder.geocode(address, function(err, data) {
      if (err || !data.length) {
        console.log(err);
        req.flash("error", "Invalid address");
        return res.redirect("back");
      }
      var lat = data[0].latitude;
      var lng = data[0].longitude;
      // var location = data[0].formattedAddress;
      res.json({ lat, lng });
    });
  });
};
