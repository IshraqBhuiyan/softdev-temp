var canvas = document.getElementById("ftb2maga");
var ctx = canvas.getContext('2d');
var button = document.getElementById("clear");

ctx.strokeStyle = "#000000";
ctx.strokeRect(0,0, 538, 538);

ctx.fillStyle = "#FF0000";

var makeDots = function(e){
}

ctx.addEventListener("mousedown", makeDots, false);

