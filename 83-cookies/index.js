// cookie 11 a small text file stored on your computer used to remember information about the user saved in name=value pairs //document.cookie = "firstName=SpongeBob; expires=Sun, 1 //document.cookie = "lastName=SquarePants; expires=Sun, 1 //
console.log(document.cookie); 
function setCookie(name, value, daysToLive){ 
    const date = new Date(); 60 X ... 6 7 e 6 2 date.setTime(date.getTime() + (daysToLive *