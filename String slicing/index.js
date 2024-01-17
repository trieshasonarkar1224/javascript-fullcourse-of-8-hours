// slice() extracts a section of a string 
//   without modifying the original string 
//   and returns it as a new string, 

let fullName = "Snoop Dogg";
let firstName; 
let lastName; 

//firstName //lastName fullName.slice(0, 3);
// fullName.slice(4);

firstName = fullName.slice(e, fullName.indexOf(" ")); 
lastName = fullName.slice(fullName.indexOf(" ") + 1); 

console.log(firstName); 
console.log(lastName);