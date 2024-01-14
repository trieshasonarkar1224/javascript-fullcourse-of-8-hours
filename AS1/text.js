let username;

document.getElementById('mybutton').onclick = function(){

    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById('mylable').innerHTML = "Hello" + username;
}

let x;
let y;
let z;
x = number("pizzza");
y = string(3.14);
z = boolean("pizza");

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);




const PI = 3.14159; 
let radius;
let circumference;
radius = window.prompt("Enter the radius of a circle"); 
radius = Number(radius); 

 //PI = 420.69; 
 
 circumference = 2 * PI * radius; 
 
  console.log("The circumference is:", circumference);