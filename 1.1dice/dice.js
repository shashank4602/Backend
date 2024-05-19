
var b = Math.floor(Math.random() * 6) + 1;
var c = "/backend/dice/dice" + b + ".png";
var i = document.querySelectorAll("img")[0];
i.setAttribute("src", c);

var b1 = Math.floor(Math.random() * 6) + 1;
var c1 = "/backend/dice/dice" + b1 + ".png";
var i1 = document.querySelectorAll("img")[1];
i1.setAttribute("src", c1);

if (b > b1) document.querySelector("h1").innerHTML = "1 Wins";
else if (b < b1) document.querySelector("h1").innerHTML = "2 Wins";
else document.querySelector("h1").innerHTML = "Tie";