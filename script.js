$(document).ready(function() {
  $(document).keydown(function(move) {  //keydown, occurs when key is pressed down

    move.preventDefault();    // prevent the default action 

    switch(move.which) {
        case 37:              // moves left, left arrow key
          $(".egg").animate({
          left: "-=85"        //slides left by 85
          });
        break;
        case 38:              // moves up, up arrow key
          $(".egg").animate({
          top: "-=85"        //moves up by 85
          });         
        break;
        case 39:              // moves right, right arrow key
          $(".egg").animate({
          left: "+=85"        //moves right by 85
          });
        break;
        case 40:              // moves down, down array key
          $(".egg").animate({
          top: "+=85"        //moves down by 85
          }); 
        break;
        case 32:               // Jumps, spacebar key
          $(".egg").animate({
          top: "-=85"        //moves up by 85 and later comes down whenkey is released in keyup function
          },{duration: 100});
    }
    });
  $(document).keyup(function(move) {  //keyup, occurs when key is released 

    move.preventDefault();    // prevent the default action
    switch(move.which) {
        case 32:              //jumps, spacebar key
          $(".egg").animate({
          top: "+=85"         //it comes down when key is released, so it makes an object jump
          },{duration: 200});
        break;
        
    }
    });
});