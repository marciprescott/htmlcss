$("button").click(function () {
  $("body").css("background-color", "purple");
});
$("input").keydown(function (event) {
  $("h1").text(event.key);
});
$("h1").on("mouseover", function () {
  $("h1").css("color", "red");
});
