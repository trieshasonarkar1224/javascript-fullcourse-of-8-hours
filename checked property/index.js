document.getElementById("mybutton").onclick = function(){
    
    const mycheckbox = document.getElementById("mycheckbox")
    if("mycheckbox".checked){
        console.log("you are subscribed")
    }
    else{
        console.log("you are not subscribed")
    }
}
