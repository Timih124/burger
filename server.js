//adding dependncies
var express = require("express");
var expressHb = require("express-handlebars")

// creating servers
var app = express()
var PORT = process.env.PORT || 3000;

//  static content for the app in the "public" directory from app directory.

app.use(express.static("public"));

// Parse application body as JSON

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// creating handlebars engines
app.engine("handlebars", expressHb({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// importing burger controllers route
var routes = require("./controllers/burgers_controller.js")
app.use(routes);

// app begins to listen and sever starts
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });