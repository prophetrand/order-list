var express = require("express");

var PORT = process.env.PORT || 3002;

// Initialize Express
var app = express();

// Serve static content
app.use(express.static("public"));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initialize Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes for server to use
var routes = require("./controllers/movieControl.js");

app.use(routes);

// Start server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
