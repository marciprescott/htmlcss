var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];

// Use jQuery to select the button with the same id as the randomChosenColour
// animate a flash to the button selected in step 1.

function nextSequence() {
  var randomNumber = Math.floor(Math.random() * 3) + 1;
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#" + randomChosenColor)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  const audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}
$("button").on("click", function () {
  var userChosenColor = this.attr("id");
  console.log("user clicked:", userChosenColor);
});
