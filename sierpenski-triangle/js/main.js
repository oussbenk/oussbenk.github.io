/**
***	Author : Oussama Ben Khiroun
***	Contact : https://oussamabenkhiroun.com/
*** Version 1.0
**/

var canvas = document.getElementById("sierpinskiCanvas");
var ctx = canvas.getContext("2d");	
var fillColor = document.getElementById("myColor").value;
var depth;

updateConfiguration();

function updateConfiguration(){	
	var slider = document.getElementById("myRange");
	depth = slider.value;
	document.getElementById("rangeText").innerHTML = depth; // Display the default slider value	
	drawSierpinski(depth);
}

function changeColor(){			
	fillColor = document.getElementById("myColor").value;
	ctx.fillStyle = fillColor;
	ctx.fill();
}

function drawSierpinski(d){	
	clearSierpinski();
	drawTriangle(d,ctx);		
	ctx.fillStyle = fillColor;
	ctx.fill();
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 1;
	ctx.stroke();
}

function clearSierpinski(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.resetTransform();
	ctx.beginPath();
	ctx.moveTo(0,0);
}

var iteration;
var myTimer;

function startAnimation(){
	iteration = 1;
	clearSierpinski();
	drawSierpinski(0);
	myTimer = setInterval(showAnimation, 1000);
}

function showAnimation(){
	drawSierpinski(iteration%8);
	iteration++;
}

function stopAnimation(){
	clearInterval(myTimer);
}