$(document).ready(function(){
    $(".owl-curse").owlCarousel();
});

$('.owl-curse').owlCarousel({
    loop:false,
    margin:24,
    nav:true,
    autoWidth: true,
    responsiveClass:true,
    responsive: {

        300: {
            items: 1,
            nav: false
        },

        540: {
            items: 2,
            nav: false,
            autoplay: false,

        },
        1200: {
            items: 3,
            nav: true

        },
    }
})



$(function() {

    let nav = $("#nav-h");
    let navToggle = $("#navToggle");
    navToggle.on("click", function() {

        event.preventDefault();

        nav.toggleClass("show");

    });
});

