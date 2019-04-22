const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// express app
const app = express();
const PORT = process.env.PORT || 8080;

// data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/*+json" }));
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));
// app listening on port
app.listen(PORT, function() {
    console.log(`App is listening on port ${PORT}`);
});

// data/routing route files to html
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);
