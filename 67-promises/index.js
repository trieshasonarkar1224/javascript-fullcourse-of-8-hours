const promise = new Promise((resolve, reject) => {
    
    let fileloaded = false; 
    if(fileloaded) { 
        resolve("File loaded") } 
        
        else{ reject("File NOT loaded"); } 
    }); 
    
    promise.then(value => console.log(value)) 
    .catch(error => console.log(error));