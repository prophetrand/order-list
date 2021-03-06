var express = require("express");

var router = express.Router();

// Import movie.js to access movie functions
var movie = require("../models/movie.js");

router.get("/", function(req, res) {
    movie.all(function(data) {
        var movieObj = {movies: data};
        // console.log(movieObj);
        res.render("index", movieObj);
    });
});
      
router.post("/api/movies", function(req, res) {
    movie.create([
        "title"
    ], [req.body.title], function(result) {
        // Send back the ID of the new movie
        res.json({ id: result.insertId });
    });
});

router.put("/api/movies/:id", function(req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    movie.update({
        watched: req.body.watched
    }, condition, function(result) {
        if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
});

// exporting for server.js to use
module.exports = router;
