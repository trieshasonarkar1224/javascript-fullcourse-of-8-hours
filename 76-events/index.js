const element = document.getElementById("myDiv"); 
element.onclick = doSomething; 
element.onload = doSomething; 
element.onchange = doSomething; 
element.onmouseover= doSomething; 
element.onmouseout = doSomethingElse; 
element.onmousedown = doSomething; 
element.onmouseup = doSomethingElse; 
function doSomething(){ 
    //alert("You did something!");
     element.style.backgroundColor = "red"; } 
     function doSomethingElse(){
        //alert("You did something!");
         element.style.backgroundColor = "lightgreen";}