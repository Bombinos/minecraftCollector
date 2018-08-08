
$(document).ready(function () {

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
        $("#rGn").html("Number to match: " + randomNum);
        $("#wins").html("<p>Wins: " + wins + "</p>");
        $("#losses").html("<p>Losses: " + losses + "</p>");
        $("#playerTotalNum").html(counter);
        $(".crystal").hover(function () {
            $(this).css("opacity", "0.6");
            }, function () {
                $(this).css("opacity", "1");
            });
       
    }

    // randomNumber();
    resetG();



    $("#crystalImages").on("click", ".crystal", function() {
        counter += parseInt($(this).attr("value"));
        $("#playerTotalNum").html(counter);
        if (counter == randomNum) {
            wins++;
            resetG();
        } else if (counter > randomNum) {
            losses++;
            resetG();
        };
    });


    
 });

    // $( "#list" ).on( "click", "a", function( event ) {
    //     event.preventDefault();
    //     console.log( $( this ).text() );
    // });