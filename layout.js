/* global $ resizeScore addImages */

var topHeight;
var bottomHeight;
var middleHeight;

$(document).ready(function() {
  
  setLayoutInPct(10, 10);
  
  addUIEvents();
  addImages();
});

$(window).resize(function() {
    resizeScore();
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
  
  var fullscreen = false;
  
  if ($('#top').height() > 0) {
    
    $('#top').animate({
      height: 0
    }); 
    $('#bottom').animate({
      height: 0
    });
    $('#middle').animate({
      height: 100 + '%'
    }, {
      complete: function() { resizeScore(); }
    }); 
    
  }else{
    
    var midH = 100 - topHeight - bottomHeight;
    
    $('#top').animate({
      height: topHeight + '%'
    }); 
    $('#bottom').animate({
      height: bottomHeight + '%'
    }); 
    $('#middle').animate({
      height: midH + '%'
    }, {
      complete: function() { resizeScore(); }
    }); 
    
  }
}