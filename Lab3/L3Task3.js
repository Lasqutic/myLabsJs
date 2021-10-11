var canvas3 = document.getElementById('c3');
var ctx3 = canvas3.getContext('2d');
canvas3.height = 350;
canvas3.width = 500;
ctx3.moveTo(0, 0);
ctx3.lineWidth = 8;

btn2.addEventListener('click', btnClearEvent(ctx3));

canvas3.onmousemove = function (event) {
  var x = event.offsetX;
  var y = event.offsetY;
  ctx3.lineTo(x, y);
  ctx3.strokeStyle = getRandomColor();
  ctx3.stroke();
}
