$("button").click(function () {
  $("body").css("background-color", "purple");
});
$("input").keydown(function (event) {
  $("h1").text(event.key);
});
$("h1").on("mouseover", function () {
  $("h1").css("color", "red");
});
// Creating html elements
$("h1").before("<button>NEW</button>");

$("button").on("click", function () {
  $("h1").fadeToggle();
});
$("button").on("click", function () {
  $("h1").animate({ opacity: 0.5 });
});
