
let overlay = document.getElementById("tree1");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open overlay
myBtn.onclick = function() {
  overlay.style.display = "block";
}

// When the user clicks on <span> (x), close overlay
span.onclick = function() {
  overlay.style.display = "none";
}

// When the user clicks anywhere outside of the overlay, close it
window.onclick = function(event) {
  if (event.target == overlay) {
    overlay.style.display = "none";
  }
}
