const express = require("express");
const path = require("path");
// express app
const app = express();
const PORT = process.env.PORT || 8080;

// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log(`App is listening on port ${PORT}`);
});

// Routes
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "home.html"));
});
app.get("/survey", (req, res) => {
    res.sendFile(path.join(__dirname, "survey.html"));
});

// sends everyone inside the api
app.get("/api/buddy", (req, res) => {
    res.json(buddy);
});

// post to the api buddy
app.post("/api/buddy", (req, res) => {
    const newBuddy = req.body;

    newBuddy.routeName = newBuddy.name.replace(/\s+/g, "").toLowerCase();
    console.log(newBuddy);

    buddy.push(newBuddy);
});

// api data test object

const buddy = [
    {
        routeName: "ahmed",
        name: "Ahmed",
        photo:
            "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        scores: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
    }
];
