

function myFunction()
{
var a=document.getElementById("text").value;

if (a<=18)
  {
document.getElementById("value").innerText="You are too young!";
  }
else if(a>=66)
  {
document.getElementById("value").innerHTML="You are too old!";
  }
  else 
  {
document.getElementById("value").innerHTML="Just right!";
  }
}