function openNav() {
  document.getElementById("sideNav").style.width = "250px";
}

function closeNav() {
  document.getElementById("sideNav").style.width = "0";
}


var x = 0;
var txt = "Hi, welcome to Wan's Portfolio.";
var speed = 130; 

function typeWriter() {
  if (x < txt.length) {
    document.getElementById("headerText").innerHTML += txt.charAt(x);
    x++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();