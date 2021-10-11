var canvas5 = document.getElementById('c5');
var ctx5 = canvas5.getContext('2d');
canvas5.height = 350;
canvas5.width = 500;

let gradient = ctx5.createLinearGradient(0,200, 400, 200);
gradient.addColorStop(0.1, '#CD5C5C');
gradient.addColorStop(0.3, '#8B0000');
gradient.addColorStop(0.5, '#FF0000');
gradient.addColorStop(0.7, '#c72c48');
gradient.addColorStop(0.9, '#DC143C');
ctx5.fillStyle = gradient;
ctx5.fillRect(0, 0, 500, 350);