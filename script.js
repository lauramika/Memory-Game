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

