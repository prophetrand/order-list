var express = require("express");

var router = express.Router();

// Import movie.js to access movie functions
var movie = require("../models/movie.js");

router.get("/", function(req, res) {
    movie.all(function(data) {
        var movieObj = {movies: data};
        console.log(movieObj);
        res.render("index", movieObj);
    });
});
      
// router.post("/api/cats", function(req, res) {
//     cat.create([
//         "name", "sleepy"
//     ], [
//         req.body.name, req.body.sleepy
//     ], function(result) {
//         // Send back the ID of the new quote
//         res.json({ id: result.insertId });
//     });
// });

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

// router.delete("/api/cats/:id", function(req, res) {
// var condition = "id = " + req.params.id;

// cat.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//     // If no rows were changed, then the ID must not exist, so 404
//     return res.status(404).end();
//     } else {
//     res.status(200).end();
//     }
// });
// });

// // Export routes for server.js to use.
// module.exports = router;
