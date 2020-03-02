// require dependencies
var express = require("express");
var bodyParser = require("body-parser");


var app = express();

// setup local host connection port
var PORT = process.env.PORT || 8080;


// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


// Parse application body as JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


/*
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
*/


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/burgerController.js");
app.use(routes);






// if local host connect successfully return this message 
app.listen(PORT, function() {
    console.log("Your local server start no: http://localhost:" + PORT);
})