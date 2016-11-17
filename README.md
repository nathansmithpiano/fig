
Color Schemes

Feather         #77C9D4
Marine          #57BC90
Forest          #015249
Sleek Grey      #A5A5AF

Cream           #E8DDCB
Beige           #CDB380
Teal            #036564
Blue            $036564
Navy            #031634


Branch: 'layout'

WORKING FUNCTIONS:
- resizing of top, middle, bottom via variables and matching contents to fit

  1. Three div's (#top, #middle, #bottom) which hide (via adjusting height) when tapping or clicking #middle
  2. Height for top/bottom div's set by function
  3. Some color scheming
  4. Tried image handling, wasn't resizing fluidly.
  5. Fixed resizing issues by adjusting scale
  6. Added resize via media-querying for mobile devices
  7. Tried animating score, in resizePagesContainer(), calls too often, in clickHandler(), resizePagesContainer() essentailly overrides
  8. 
