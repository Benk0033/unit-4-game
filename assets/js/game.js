$(document).ready(function () {
    var targetScore = Math.floor(Math.random() * (121 - 19)) + 19;;
    var losses = 0;
    var wins = 0;
    var totalCounter = 0;
    var images = [
        "assets/images/blue_gem.jpg",
        "assets/images/green_gem.jpg",
        "assets/images/pink_gem.jpg",
        "assets/images/yellow_gem.jpg"];

    // Displays scoreboard
    $("#total-score").html("Total Score: 0");
    $("#wins").html("Wins: 0");
    $("#losses").html("Losses: 0");
    $("#target-score").html("Target Score: " + targetScore);

    // Resets game after a win or loss
    function reset() {
        targetScore = Math.floor(Math.random() * (121 - 19)) + 19;
        $("#target-score").html("Target Score: " + targetScore);
        totalCounter = 0;

        $(".crystal").each(function () {
            var random = Math.floor(Math.random() * (13 - 1)) + 1;
            $(this).attr("value", random);
        });
    };

    // Updates html with crystals and images
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * (13 - 1)) + 1;
        var crystal = $("<img>");

        crystal.attr({
            "class": "crystal",
            "value": random,
            "src": images[i]
        });

        $(".crystals").append(crystal);
    };

    $(".crystal").on("click", function () {
        var crystalVal = parseInt($(this).attr("value"));
        totalCounter += crystalVal;

        $("#total-score").html("Total Score: " + totalCounter);
        console.log(crystalVal);
        if (totalCounter === targetScore) {
            wins++
            $("#wins").html("Wins: " + wins);
            $("#total-score").html("Total Score: 0");
            reset();
        }
        else if (totalCounter > targetScore) {
            losses++
            $("#losses").html("Losses: " + losses);
            $("#total-score").html("Total Score: 0");
            reset();
        };
    });

});

