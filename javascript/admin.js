                      //drag & drop system

dragElement(document.getElementById("dragndrop","mydiv2"));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

let overlay = document.getElementById("tree1");
let span = document.getElementsByClassName("close")[0];
let button = document.getElementsByClassName("godkend")[0];

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    overlay.style.display = "block";
  }

  span.onclick = function() {
    overlay.style.display = "none";
  }

  button.onclick = function(){
    overlay.style.display = "none";
  }
}

                    //Når du vælger deres rang kommer der automatisk billede af rang

function showimage()
{
    if (!document.images)
        return
        document.images.pictures.src=
        document.mygallery.picture.options[document.mygallery.picture.selectedIndex].value
}



                    //dato for hvornår de starter
// vælg dag.
    var select = document.getElementById("dag"),

        arr = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];


     for(var i = 0; i < arr.length; i++)
     {
         var option = document.createElement("OPTION"),
             txt = document.createTextNode(arr[i]);
         option.appendChild(txt);
         option.setAttribute("value",arr[i]);
         select.insertBefore(option,select.lastChild);
     }

// vælg måned
        var select = document.getElementById("måned")


             arr = ["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"];


     for(var i = 0; i < arr.length; i++)
     {
         var option = document.createElement("OPTION"),
             txt = document.createTextNode(arr[i]);
         option.appendChild(txt);
         option.setAttribute("value",arr[i]);
         select.insertBefore(option,select.lastChild);
     }
// vælg år
    var select = document.getElementById("år"),

             arr = ["1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"];


     for(var i = 0; i < arr.length; i++)
     {
         var option = document.createElement("OPTION"),
             txt = document.createTextNode(arr[i]);
         option.appendChild(txt);
         option.setAttribute("value",arr[i]);
         select.insertBefore(option,select.lastChild);
     }

                    // Dota for hvonår de går på pension
// vælg dag.
      var select = document.getElementById("dagSlut"),

             arr = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];


      for(var i = 0; i < arr.length; i++)
      {
          var option = document.createElement("OPTION"),
              txt = document.createTextNode(arr[i]);
          option.appendChild(txt);
          option.setAttribute("value",arr[i]);
          select.insertBefore(option,select.lastChild);
      }

// vælg måned
          var select = document.getElementById("månedSlut")


              arr = ["Jan","Feb","Mar","Apr","Maj","Jun","Jul","Aug","Sep","Okt","Nov","Dec"];


          for(var i = 0; i < arr.length; i++)
          {
              var option = document.createElement("OPTION"),
                  txt = document.createTextNode(arr[i]);
              option.appendChild(txt);
              option.setAttribute("value",arr[i]);
              select.insertBefore(option,select.lastChild);
          }
// vælg år
         var select = document.getElementById("årSlut"),

              arr = ["1983","1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995","1996","1997","1998","1999","2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019"];


          for(var i = 0; i < arr.length; i++)
          {
              var option = document.createElement("OPTION"),
                  txt = document.createTextNode(arr[i]);
              option.appendChild(txt);
              option.setAttribute("value",arr[i]);
              select.insertBefore(option,select.lastChild);
          }
