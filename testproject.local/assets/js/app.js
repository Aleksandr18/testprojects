$(document).ready(function(){
     $(".owl-curse").owlCarousel();
});

$('.owl-curse').owlCarousel({
     loop:false,
     margin:24,
     nav:true,
     autoWidth: true,
     responsive: {
          300: {
               items: 3
          }
     }
})


$(function() {
    let header = $("#header");
    let wantprog = $("#wantprog");
    let headerH = wantprog.innerHeight();
    let scrollPos = $(window).scrollTop();


    $(window).on("scroll load", function() {

      scrollPos = $(this).scrollTop();

      if(scrollPos > headerH) {
          header.addClass("fixed")
      } else {
          header.removeClass("fixed");
      }
    });

    let nav = $("#nav-h");
    let navToggle = $("#navToggle");
    navToggle.on("click", function() {

      event.preventDefault();

      nav.toggleClass("show");

    });


});
