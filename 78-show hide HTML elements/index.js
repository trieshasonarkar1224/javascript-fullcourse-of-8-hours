const myButton = document.querySelector("#myButton"); 
const myImg = document.querySelector("#myImg"); 

myButton.addEventListener("click", () => {
    console.log(myImg.style.display);
    if(myImg.style.display == "none") { 
        myImg.style.display = "block"; }
        else{ myImg.style.display = "none";}
    })