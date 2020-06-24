$(document).ready(function () {
  $(".header__m-button").on("click", function () {
    $(".header__nav").toggleClass("active");
    $("body").toggleClass("no-scroll");
  });
});
