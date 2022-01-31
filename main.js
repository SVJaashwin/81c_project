var canvas = document.getElementById("OLYMPIC_LOGO");
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = "5";
ctx.arc(200,200,50,0,2*Math.PI);

ctx.strokeStyle = "orange";
ctx.lineWidth = "5";
ctx.arc(250,250,50,0,2*Math.PI);


ctx.strokeStyle = "black";
ctx.lineWidth = "5";
ctx.arc(300,200,50,0,2*Math.PI);


ctx.strokeStyle = "green";
ctx.lineWidth = "5";
ctx.arc(350,250,50,0,2*Math.PI);


ctx.strokeStyle = "red";
ctx.lineWidth = "5";
ctx.arc(400,200,50,0,2*Math.PI);

ctx.stroke();
