/* global $ */

function addImages() {
  
  $('#pages-container').append('<div id="page1"></div>');
  
  $('#page1').append('<img src="/scores/grieg-12-1-1-01.png">');
  $('#page1').append('<img src="/scores/grieg-12-1-1-02.png">');
  $('#page1').append('<img src="/scores/grieg-12-1-1-03.png">');
  $('#page1').append('<img src="/scores/grieg-12-1-1-04.png">');
  
  // resizePages();
  
}

// $('#score-container').resize(function() {
$(window).resize(function() {
    resizePages();
});

function resizePages() {
  
  console.log('resize');
  
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
  
  var s = $('#score-container');
  var p = $('#pages-container');
  
  //figure out scale
  scale = s.height() / totH;
  
  p.css('maxWidth', totW * scale);
  p.css('maxHeight', totH * scale);

  // console.clear();
  console.log('score-container height: ' + s.height());
  console.log('pages-container height: ' + p.height());
  console.log('total height: ' + totH);
  console.log('scale: ' + scale);
  
}