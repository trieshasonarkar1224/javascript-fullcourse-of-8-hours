row = widow.prompt('Enter # of rows');
columns = window.prompt('Enter # of columns');

for (let i =1; i <= rows; i+=1){
    for( let j = 1; j <=columns; j+=1){
        document.getElementById("myrectangle").innerHTML += j;
    }
    document.getElementById("myrectangle").innerHTML +="<br>"
}