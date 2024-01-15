let count = 0; 

document.getElementById("Decrease-button").onclick = function()
{
    count-=1;
    document.getElementById("countlable").innerHTML = count;
}
document.getElementById("Reset-button").onclick = function()
{
    count =0;
    document.getElementById("countlable").innerHTML = count;
}
document.getElementById("Increase-button").onclick = function()
{
    count+=1; 
    document.getElementById("countlable").innerHTML = count;
}