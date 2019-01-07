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
    // app.get("/comments", function (req, res) {
    //     res.render("comments");
    //     // res.render("index", { comments: data });
    //     // res.render("comment", comment[i]);
    //     // res.render("author", author[i]);
    // });


}