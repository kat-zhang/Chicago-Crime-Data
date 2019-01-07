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
    app.get("/comments", function (req, res) {
        res.render("comments");
        // res.render("comments", comment[i]);
        // res.render("author", author[i]);
    });

    // app.get("/comments", function (req, res) {
    //     db.Crime.findAll({}).then(function(dbComments){
    //         res.render("comments");
    //         res.json({
    //             data: {
    //                 comment: req.params.comment,
    //                 author: req.params.author
    //             }
    //         })
    //     })
    //     res.render("comments");
    // });
}