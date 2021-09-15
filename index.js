var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

ctx.beginPath();
ctx.arc(250,250,250,0,2*Math.PI);
ctx.fillStyle="rgb(6,40,90)";
ctx.fill();

ctx.beginPath();
ctx.arc(250,300,200,0,2*Math.PI);
ctx.fillStyle="rgb(38,99,200)";
ctx.fill();

ctx.beginPath();
ctx.arc(250,350,150,0,2*Math.PI);
ctx.fillStyle="rgb(199,202,211)";
ctx.fill();

ctx.beginPath();
ctx.arc(250,400,100,0,2*Math.PI);
ctx.fillStyle="rgb(38,99,200)";
ctx.fill();