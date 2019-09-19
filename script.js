//to shuffle cards when new game starts
/*function shuffle() {
  
  var tiles = Array.from(document.getElementsByClassName("cards"));
  var current = tiles.length;
  var index, temp;
  
  while (current > 0) {
    index = Math.floor(Math.random() * current);
    current--;
    
    temp = tiles[current];
    tiles[current] = tiles[index];
    tiles[index] = temp;
  }
   document.getElementsByClassName("cards") = tiles.innerHTML;
}*/


//reload() function, reloads the game, works by clicking on "RELOAD" button
function reload() {
  document.location.reload(true);
}


//removes intro and how-to-play-the-game divs by clicking anywhere on the screen
function off() {
  document.getElementById("overlay").style.display = "none";
}


//makes intro and how to play the game divs visible
function on() {
  document.getElementById("overlay").style.display = "block";
}


//when player click quit button quitOverlay becomes visible and hides the rest
function end() {
  document.getElementById("quitOverlay").style.display = "block";
  document.getElementById("main").style.display = "none";
  document.getElementById("hide").style.display = "none";
  document.getElementById("memo").style.display = "none";
  document.getElementById("start").style.display = "none";
  document.getElementById("quitOverlay").style.background = 'none';
  document.getElementById("quitOverlay").style.backgroundImage = 'url("paw-print-941498_1920.jpg")';
}