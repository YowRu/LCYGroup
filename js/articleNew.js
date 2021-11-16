$(document).ready(function(){
  let w = $('#main img.top').width();
  $('#main p').width(w);
  $('#main .border').outerWidth(w);
//resize
$(window).resize(function(){
  let w = $('#main img.top').width();
  $('#main p').width(w);
  $('#main .border').outerWidth(w);
  });
});