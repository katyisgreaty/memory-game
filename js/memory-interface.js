var Memory = require('./../js/memory.js').memoryModule;

$(document).ready(function(event) {
    event.preventDefault();

$(".back1").click(function(){
    $(".card1").toggle();
    $(".back1").toggle();
  });

$(".back2").click(function(){
    $(".card2").toggle();
    $(".back2").toggle();
  });

$(".back3").click(function(){
    $(".card3").toggle();
    $(".back3").toggle();
  });

$(".back4").click(function(){
    $(".card4").toggle();
    $(".back4").toggle();
  });

// $(".card1").click(function(){
//     $(".card1").toggle();
//     $(".back1").toggle();
//   });
//
// $(".card2").click(function(){
//     $(".card2").toggle();
//     $(".back2").toggle();
//   });
//
// $(".card3").click(function(){
//     $(".card3").toggle();
//     $(".back3").toggle();
//   });
//
// $(".card4").click(function(){
//     $(".card4").toggle();
//     $(".back4").toggle();
//   });
});
