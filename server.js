var express = require("express");


var PORT = process.env.PORT || 8080;

var app = express();


//express static middleware
app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var exphbs = require("express-handlebars");
// Sets up the Express app to handle data parsing
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");
app.use(routes);


// Start our server
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on PORT: " + PORT + ": http://localhost:8080");
});