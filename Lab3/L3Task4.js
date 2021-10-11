var canvas4 = document.getElementById('c4');
var ctx4 = canvas4.getContext('2d');
canvas4.height = 350;
canvas4.width = 500;
ctx4.moveTo(0, 0);
ctx4.lineWidth = 8;
var holding = false;




canvas4.addEventListener('mousedown', function (event) {
  holding = true;

})
canvas4.addEventListener('mouseup', function (event) {
  holding = false;

})
canvas4.addEventListener('mouseleave', function (event) {
  holding = false;

})

canvas4.addEventListener('mousemove', function (event) {
  if (holding == true) {
    var x = event.offsetX;
    var y = event.offsetY;
    ctx4.lineTo(x, y);
    ctx4.strokeStyle = getRandomColor();
    ctx4.stroke();
  }
})

btn3.addEventListener('click', btnClearEvent(ctx4));