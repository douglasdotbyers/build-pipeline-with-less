$(document).ready(function() {
  $(".nav-toggle a").click(function() {
    $("body").toggleClass("overflow-hidden");
    $(".nav-toggle a i")
      .toggleClass("fa-bars")
      .toggleClass("fa-close");
    $(".nav-overlay").fadeToggle(200);
    $(".nav-overlay").scrollTop(0);
  });

  $(".nav-overlay").click(function() {
    $("body").toggleClass("overflow-hidden");
    $(".nav-toggle a i")
      .toggleClass("fa-bars")
      .toggleClass("fa-close");
    $(".nav-overlay").fadeToggle(200);
    $(".nav-overlay").scrollTop(0);
  });
});
