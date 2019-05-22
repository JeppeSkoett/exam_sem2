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
