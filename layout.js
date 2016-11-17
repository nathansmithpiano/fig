/* global $ */


$(document).ready(function() {
  
  // add click/touch event to middle div
  var touchzone = document.getElementById("middle");
  
  if ('ontouchstart' in window) {
    /* browser with Touch Events support */
    
    // Add an event handler for the touchstart event
    touchzone.addEventListener("touchstart", clickHandler, false);
  }else{
  
    touchzone.addEventListener("click", clickHandler, false);
  }
  
});

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
      height: '60vh'
    });
  }
}