var canvas = document.getElementById("ftb2maga");
var ctx = canvas.getContext('2d');
var button = document.getElementById("clear");

ctx.strokeStyle = "#000000";
ctx.strokeRect(0,0, 538, 538);

ctx.fillStyle = "#FF0000";

var makeDots = function(e){
  var x = e.clientX;
  var y = e.clientY;
  var pane = document.getElementById("ftb2maga").getConext('2d');
  pane.arc(40,40,20,0,Math.Pi *2, false);
  pane.beginPath();
  pane.lineTo(x, y);
  pane.arc(x,y,20,0, Math.Pi * 2);
  path.moveTo(x,y);
  pane.closePath();
}

canvas.addEventListener("mouseclick", makeDots, false);
