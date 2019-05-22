function Scroll(){
    let top = document.getElementById('texttilkort')
    let ypos = window.pageYOffset;
    if(ypos > 400){
       top.style.height = "470px";
       top.style.width = "400px";
       }
       else{ 
       top.style.height = "0px";
       top.style.width = "0px";
       }
}
       window.addEventListener("scroll",Scroll);

