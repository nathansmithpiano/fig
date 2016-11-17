/* global $ addImages */

var topHeight;
var bottomHeight;
var middleHeight;

$(document).ready(function() {
  
  setLayoutInPct(10, 10);
  
  addImages();
  
  addUIEvents();
});

function setLayoutInPct(tH, bH) {
  
  topHeight = tH;
  bottomHeight = bH;
  middleHeight = 100 - tH - bH;
  
  $('#top').css('height', topHeight + '%');
  $('#bottom').css('height', bottomHeight + '%');
  $('#middle').css('height', middleHeight + '%');
  
}

function addUIEvents() {
  
  // add click/touch event to middle div
  var touchzone = document.getElementById("middle");
  
  /* browser with Touch Events support */
  if ('ontouchstart' in window) {
    touchzone.addEventListener("touchstart", clickHandler, false);
  }else{
    touchzone.addEventListener("click", clickHandler, false);
  }
  
}

function clickHandler() {
  $('#top').animate({
    height: 'toggle'
  }); 

  $('#bottom').animate({
    height: 'toggle'
  });

  if ( $('#top').height() > 0 ) {
    $('#middle').animate({
      height: '100%'
    });
  }else{
    $('#middle').animate({
      height: middleHeight + '%'
    });
  }
  
  resizePages();
}