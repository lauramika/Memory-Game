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

//removes overlay div by clicking anywhere on the screen
function off() {
  document.getElementById("overlay").style.display = "none";
}
//makes overlay visible
function on() {
  document.getElementById("overlay").style.display = "block";
}
//when player click quit button quitOverlay becomes visible
function end() {
  document.getElementById("quitOverlay").style.display = "block";
  document.getElementById("main").style.display = "none";
  document.getElementById("hide").style.display = "none";
  document.getElementById("memo").style.display = "none";
  document.getElementById("start").style.display = "none";
}