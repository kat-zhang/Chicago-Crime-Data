module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("home");
    });
    app.get("/form", function (req, res) {
        res.render("form");
    });

    app.get("/map", function (req, res) {
        res.render("map");
    });
}