const buddies = require("../data/buddies");
module.exports = function(app) {
    // sends everyone inside the api
    app.get("/api/buddy", (req, res) => {
        res.json(buddies);
    });

    // post to the api buddy
    app.post("/api/buddy", (req, res) => {
        const newBuddy = req.body;

        newBuddy.routeName = newBuddy.name.replace(/\s+/g, "").toLowerCase();
        // console.log("this is the object sent from the user \n ", newBuddy);

        // now compare the data input with our predefined database to see which object has the lowest difference
        const bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };
        const userData = newBuddy;
        const userScore = userData.scores;
        // console.log(`user score: \n`, userScore);
        var totalDifference = 0;

        // loop through object array
        for (let i = 0; i < buddies.length; i++) {
            totalDifference = 0;

            for (let j = 0; j < buddies[i].scores.length; j++) {
                totalDifference += Math.abs(
                    parseInt(userScore[j] - buddies[i].scores[j])
                );

                if (
                    totalDifference <= bestMatch.friendDifference &&
                    totalDifference !== 0
                ) {
                    bestMatch.name = buddies[i].name;
                    bestMatch.photo = buddies[i].photo;
                    bestMatch.friendDifference = totalDifference;
                }
            }
        }
        // check if that person already exists
        let arrayNames = [];
        for (let i = 0; i < buddies.length; i++) {
            arrayNames.push(buddies[i].name);
        }
        if (arrayNames.indexOf(newBuddy.name) === -1) {
            buddies.push(newBuddy);
            console.log(buddies);
        }

        res.send(bestMatch);
    });
};
