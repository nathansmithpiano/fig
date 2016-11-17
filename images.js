/* global $ */

function addImages() {
  
  $('#pages-container').append('<div id="page1"></div>');
  
  $('#page1').append('<img src="/scores/grieg-12-1-1-01.png">');
  $('#page1').append('<img src="/scores/grieg-12-1-1-02.png">');
  $('#page1').append('<img src="/scores/grieg-12-1-1-03.png">');
  $('#page1').append('<img src="/scores/grieg-12-1-1-04.png">');
  
  $('#pages-container').imagesLoaded(function() {
        resizeScore();
  });
}

function resizeScore() {
  
  var t = $('#top');
  var b = $('#bottom');
  var s = $('#score-container');
  var p = $('#pages-container');
  
  var totW = 0;
  var totH = 0;
  var scale = 0;
  
  //get total dimensions based on total height and biggest width
  $('#page1').children('img').each(function() {
    
    totH += $(this).height();
    
    //sets largest width of children
    if ($(this).width() > totW) {
        totW = $(this).width();
    }

  });
  

  //figure out scale depending on smallest dimension in scoreContainer
  if ( (s.height() > s.width())      ) {
    scale = s.width() / totW;
  }else{
    scale = s.height() / totH; //happen earlier
  }
  
  //fix for scale to prevent totH from exceeding s.height()
  if ( (s.height() < totH) || ( (s.height() == totH) && (s.width() > totW) ) ) {
    scale = s.height() / totH;
  }
  
  console.clear();
  console.log('s: ' + Math.round(s.width()) + ', ' + Math.round(s.height()));
  console.log('p: ' + Math.round(p.width()) + ', ' + Math.round(p.height()));
  console.log('tot: ' + Math.round(totW) + ', ' + Math.round(totH));
  
  p.width(totW * scale);
  p.height(totH * scale);
  
}