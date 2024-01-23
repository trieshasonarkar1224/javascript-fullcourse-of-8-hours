try{ 
    let x = window.prompt("Enter a #"); 
    x = Number(x); 
    
    if(isNaN(x)) throw "That wasn't a number!"; 
    
    console.log(`${x} is a number`);
}

catch(error){ 
    console.log(error);}