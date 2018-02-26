

$("#startButton").on("click", function() {

var purpleVal = Math.floor((Math.random() * 12) + 1); console.log("purple Gem = " + purpleVal);
var greenVal = Math.floor((Math.random() * 12) + 1);  console.log("green Gem = " + greenVal);
var redVal = Math.floor((Math.random() * 12) + 1);    console.log("red Gem = " + redVal);
var blueVal = Math.floor((Math.random() * 12) + 1);   console.log("blue Gem = " + blueVal);

var numberGoal = Math.floor(Math.random() * ((120-19)+1) + 19); console.log("# Goal = " + numberGoal);
var numberTotal = 0;

var wins = 0;
var losses = 0;

updateWin();
updateLoss();

activateCrystals();

// display number goal
$("#numberToMatch").html(numberGoal);



// process click events on each crystal
/*
$("#purpleCrystal").on("click", function() {
    numberTotal = numberTotal + purpleVal;
    $("#numberTotal").html(numberTotal);
    checkStatus();
});

$("#greenCrystal").on("click", function() {
    numberTotal = numberTotal + greenVal;
    $("#numberTotal").html(numberTotal); 
    checkStatus();
});

$("#redCrystal").on("click", function() {
    numberTotal = numberTotal + redVal;
    $("#numberTotal").html(numberTotal); 
    checkStatus();
});

$("#blueCrystal").on("click", function() {
    numberTotal = numberTotal + blueVal;
    $("#numberTotal").html(numberTotal);
    checkStatus(); 
});
*/

//// FUNCTIONS ////

function activateCrystals() {
    $("#purpleCrystal").on("click", function() {
        numberTotal = numberTotal + purpleVal;
        $("#numberTotal").html(numberTotal);
        checkStatus();
    });
    
    $("#greenCrystal").on("click", function() {
        numberTotal = numberTotal + greenVal;
        $("#numberTotal").html(numberTotal); 
        checkStatus();
    });
    
    $("#redCrystal").on("click", function() {
        numberTotal = numberTotal + redVal;
        $("#numberTotal").html(numberTotal); 
        checkStatus();
    });
    
    $("#blueCrystal").on("click", function() {
        numberTotal = numberTotal + blueVal;
        $("#numberTotal").html(numberTotal);
        checkStatus(); 
    });
}

function checkStatus () {
    if (numberTotal === numberGoal) {
        $("#numberTotal").html(numberTotal + " -- YOU WON!!!");    
        wins++;
        updateWin();

        deactivateCrystals();        
        
        $("#startButton").html("Press to Try Again");
        $("#startButton").on("click", function() {
            reset();
        });
    } 
    else if (numberTotal > numberGoal) {
        $("#numberTotal").html(numberTotal + " -- YOU LOST");
        losses++;
        updateLoss();

        deactivateCrystals();        

        $("#startButton").html("Press to Try Again");
        $("#startButton").on("click", function() {
            reset();
        });
    }
}

function reset() {
    purpleVal = Math.floor((Math.random() * 12) + 1); console.log("purple Gem = " + purpleVal);
    greenVal = Math.floor((Math.random() * 12) + 1);  console.log("green Gem = " + greenVal);
    redVal = Math.floor((Math.random() * 12) + 1);    console.log("red Gem = " + redVal);
    blueVal = Math.floor((Math.random() * 12) + 1);   console.log("blue Gem = " + blueVal);
    
    numberGoal = Math.floor(Math.random() * ((120-19)+1) + 19); console.log("# Goal = " + numberGoal);
    numberTotal = 0;

    activateCrystals();

    $("#numberToMatch").html(numberGoal);
    $("#numberTotal").html("");

    $("#startButton").off('click');
    $("#startButton").html("Good Luck!");
}

function updateWin() {
    $("#wins").html(wins);
}

function updateLoss() {
    $("#losses").html(losses);
}

function deactivateCrystals() {
    $("#purpleCrystal").off("click");
    $("#greenCrystal").off("click");
    $("#redCrystal").off("click");
    $("#blueCrystal").off("click");
}



$("#startButton").off('click');
$("#startButton").html("Good Luck!");


}); 
