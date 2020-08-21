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
