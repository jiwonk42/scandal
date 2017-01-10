$(document).ready(function() {
  $(".clickable").click(function() {
    $(".showing").toggle();
    $(".hidden").toggle();
  });
  $(".clickable2").click(function() {
    $(".showing2").toggle();
    $(".hidden2").toggle();
  });
});
