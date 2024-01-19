let grades [100, 50, 90, 60, 80, 70]; 
    grades.sort(descending); 
    grades.forEach(print); 
    function descending(x, y){ return y - x; } 
    function print(element){ 
        console.log(element);
    }