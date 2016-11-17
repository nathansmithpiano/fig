/* global $ */

function addNavButtons() {
  
  var nav = $('#top');
  
  nav.append('<div id="menu-button" class="nav-button"></div>');
  $('#menu-button').append('<img src="icons/settings.png">');
  
  nav.append('<div id="search-button" class="nav-button"></div>');
  $('#search-button').append('<img src="icons/search.png">');
  
}