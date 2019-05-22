window.addEventListener("scroll",Scroll);

function Scroll(){
    let top = document.getElementById("infoMap")
    let ypos = window.pageYOffset;
    if(ypos > 300){
       top.style.height = "60vh";
       top.style.width = "30vw";
       }
       else{
       top.style.height = "0px";
       top.style.width = "0px";
       }
}

function scrollDown(x, y) {
  window.scrollBy(x, y);
}


let overlay = document.getElementById("hey")
let btn = document.getElementById("lortlort")
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  overlay.style.display = "block";
}

span.onclick = function() {
  overlay.style.display = "none";
}

// When the user clicks anywhere outside of the overlay, close it
window.onclick = function(event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
}
