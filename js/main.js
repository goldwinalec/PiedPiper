$(document).ready(function () {
  $(".header__m-button").on("click", function () {
    $(".header__nav").toggleClass("active");
    $(".header__m-button-line").toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  $(".header__nav-link").on("click", function () {
    $(".header__nav").toggleClass("active");
    $(".header__m-button-line").toggleClass("active");
    $("body").removeClass("no-scroll");
  });

  $(".top-btn").removeClass("visible");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".top-btn").addClass("visible");
    } else {
      $(".top-btn").removeClass("visible");
    }
  });

  $(".top-btn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
  });
});
