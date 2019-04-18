var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
var path = require("path");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
});

app.listen(PORT, function() {
    console.log("APP is listening on port" + PORT);
});
