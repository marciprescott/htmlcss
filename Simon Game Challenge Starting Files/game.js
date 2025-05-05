var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor = buttonColors[randomNumber];
gamePattern.push(randomChosenColor);
// Use jQuery to select the button with the same id as the randomChosenColour
// animate a flash to the button selected in step 1.
$("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

function nextSequence(); {

   var randomNumber =  Math.floor(Math.random() * 3 ) + 1

}
$()