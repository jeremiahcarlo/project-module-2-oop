const span = document.createElement("span");
seconds = 0;
minutes = 0;
span.style.position = "fixed";
span.style.top = 10;
span.style.right = 450;
span.style.color = "white";
span.style.fontSize = 50;
span.style.fontFamily = "Helvetica";
span.style.fontSize = span.innerText = `0${minutes} : 0${seconds}`;
document.getElementById("app").appendChild(span);
const timer = setInterval(function() {
  ++seconds;
  if (seconds > 59) {
    ++minutes;
    seconds = 0;
  }
  span.innerText = `0${minutes} : ${seconds}`;
  document.getElementById("app").appendChild(span);
}, 50);
