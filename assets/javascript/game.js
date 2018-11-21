
$(document).ready(function () {

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/audio/Volume Alpha - 03 - Subwoofer Lullaby.mp3');
    audioElement.load();

    var audioElementB = document.createElement('audio');
    audioElementB.setAttribute('src', 'assets/audio/pop.mp3');
    audioElementB.load();

    var images = ["assets/images/Lapizs_lazuli_dye.png",
        "assets/images/Emerald.png",
        "assets/images/Minecraft_diamond_ore.png",
        "assets/images/Ender_Pearl-1-.png"];
    var randomNum = "";
    var wins = 0;
    var losses = 0;
    var counter = 0;

    function randomNumber() {
        randomNum = Math.floor(Math.random() * 102) + 19;
    }

    function setCrystals() {
        for (i = 0; i < images.length; i++) {
            var newCrystal = $("<img>");
            newCrystal.addClass("crystal");
            newCrystal.attr("src", images[i]);
            newCrystal.attr("value", (Math.floor(Math.random() * 12) + 1));
            // newCrystal.attr("height", "200px");
            $("#crystalImages").append(newCrystal);
        }
    }

    function resetG() {
        
        $("#crystalImages").empty();
        setCrystals();
        randomNumber();
        counter = 0;
        $("#rGn").html("Weight Ordered: " + randomNum + " lbs");
        $("#wins").html("<p>Wins: " + wins + "</p>");
        $("#losses").html("<p>Losses: " + losses + "</p>");
        $("#playerTotalNum").html("You've collected: " + counter + " lbs");
        $(".crystal").hover(function () {
            $(this).css("opacity", "0.6");
            }, function () {
                $(this).css("opacity", "1");
            });
    }

    resetG();

    $("#btnWrap").on("click", ".btn", function() {
        $("#instructions").toggle();
    });

    $("#crystalImages").on("click", ".crystal", function() {
        counter += parseInt($(this).attr("value"));
        audioElement.play();
        audioElementB.play();
        $("#playerTotalNum").html("You've collected: " + counter + " lbs");
        if (counter == randomNum) {
            wins++;
            resetG();
        } else if (counter > randomNum) {
            losses++;
            resetG();
        };
    });
 });