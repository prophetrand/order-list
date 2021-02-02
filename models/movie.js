var orm = require("../config/orm.js");

var movie = {
    // all: ,

    // create: ,

    update: function(objColVals, condition, cb) {
        orm.update("movies", objColVals, condition, function(res) {
          cb(res);
        });
    }
}

module.exports = movie;