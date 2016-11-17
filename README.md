
-------------- COLOR SCHEMES -------------- 

Feather         #77C9D4
Marine          #57BC90
Forest          #015249
Sleek Grey      #A5A5AF

Cream           #E8DDCB
Beige           #CDB380
Teal            #036564
Blue            $036564
Navy            #031634

-------------- HISTORY -------------- 
Branch: layout

Commits:
  1. Three div's (#top, #middle, #bottom) which hide (via adjusting height) when tapping or clicking #middle
  2. Height for top/bottom div's set by function
  3. Some color scheming
  4. Fit content to frame in images.js
    Note: works with initial load but NOT with click events
    Note: inefficient, don't need to determine scale every time resized
    Note: only need to resize images when p.width() < s.width()