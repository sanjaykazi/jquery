// $("h1").text("Sanjay Kazi").addClass("margin-50 big-title");
// console.log($("img").attr("src"));
// $("a").attr("href","https://www.yahoo.com");
// $("h1").click(function(){
//   $("h1").css("color","purple");
// });
//
// // for(var i = 0; i < 5; i++){
// //   document.querySelectorAll("button")[i].addEventListener("click", function(){
// //     document.querySelector("h1").style.color = "pink";
// //   });
// // }
//
// $("button").click(function(){
//   $("h1").css("color","white");
// });


// $(document).keypress(function(event){
//   $("h1").text(event.key);
// });
$("button").on("click", function(){
  $("h1").animate({opacity: 0.5});
});
