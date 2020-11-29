$(document).on('scroll', function() {
    if ($(this).scrollTop() >= $('#MainContent').position().top) {
      $("#header-mini").fadeIn()
    }
    else if($(this).scrollTop() >= $('#shopify-section-header').position().top) {
        $("#header-mini").fadeOut();
    }
  });
$("#header-mini").click(function() {
    $("#header-mini-content").toggleClass("work");
});