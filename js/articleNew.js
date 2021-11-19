
  let w = $('#main img.top').width();
  let h = $('#main img.top').height();
  $('#main p').width(w);
  $('#main .border').outerWidth(w);
  $('iframe').height(h);
  $('iframe').width(w);
//resize
  $(window).resize(function(){
    let w = $('#main img.top').width();
    let h = $('#main img.top').height();
    $('#main p').width(w);
    $('#main .border').outerWidth(w);
    $('iframe').height(h);
    $('iframe').width(w);
  });