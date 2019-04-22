// Capture the form inputs
$("#submit").on("click", function(event) {
    event.preventDefault();

    // Form validation
    function validateForm() {
        var isValid = true;
        $(".form-control").each(function() {
            if ($(this).val() === "") {
                isValid = false;
            }
        });

        $(".chosen-select").each(function() {
            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }

    // If all required fields are filled
    if (validateForm()) {
        // Create an object for the user"s data
        var newBuddy = {
            name: $("#name").val(),
            photo: $("#photo").val(),
            scores: [
                $("#q1").val(),
                $("#q2").val(),
                $("#q3").val(),
                $("#q4").val(),
                $("#q5").val(),
                $("#q6").val(),
                $("#q7").val(),
                $("#q8").val(),
                $("#q9").val(),
                $("#q10").val()
            ]
        };

        // AJAX post the data to the friends API.
        $.post("/api/buddy", newBuddy, function(data) {
            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            console.log(data);
        });
    } else {
        alert("Please fill out all fields before submitting!");
    }
});
