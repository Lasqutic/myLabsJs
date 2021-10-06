var canvas = document.getElementById('c1');
canvas.height = 350;
canvas.width = window.innerWidth;

var ctx = canvas.getContext('2d');

function getCentrWidth(ctx, X, x) {
  var centr = canvas.width;
  ctx.translate((centr) / X - x, 0);
}


function drawCircles(ctx, x, y, r, g, b, fill = false) {

  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 12; j++) {

      ctx.beginPath();
      ctx.arc(x + j * 25, y + i * 25, 10, 0, Math.PI * 2, true);

      var collor = 'rgb(' + r + ',' + Math.floor(g - 12 * i) + ',' + Math.floor(b - 12 * j) + ')';

      if (fill == false) {
        ctx.strokeStyle = collor;
        ctx.lineWidth = 3;
        ctx.stroke();
        ctx.beginPath();
      }
      else {
        ctx.fillStyle = collor;
        ctx.fill();
        ctx.beginPath();
      }
    }
  }
}

getCentrWidth(ctx, 2, 350);

drawCircles(ctx, 10, 50, 230, 180, 200)
drawCircles(ctx, 400, 50, 230, 180, 200, true)


function getRandomColor() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}


const btnClearEvent = (ctx) => (event) => {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.moveTo(0, 0);
}

var canvas2 = document.getElementById('c2');
var ctx2 = canvas2.getContext('2d');
canvas2.height = 350;
canvas2.width = 500;



ctx2.moveTo(0, 0);
ctx2.lineWidth = 8;
canvas2.onclick = function (event) {



  var x = event.offsetX;
  var y = event.offsetY;
  ctx2.lineTo(x, y);
  ctx2.strokeStyle = getRandomColor();
  ctx2.stroke();
}

btn.addEventListener('click', btnClearEvent(ctx2));



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


var canvas4 = document.getElementById('c4');
var ctx4 = canvas4.getContext('2d');
canvas4.height = 350;
canvas4.width = 500;
ctx4.moveTo(0, 0);
ctx4.lineWidth = 8;
var holding = false;

btn3.addEventListener('click', btnClearEvent(ctx4));

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

var canvas5 = document.getElementById('c5');
var ctx5 = canvas5.getContext('2d');
canvas5.height = 350;
canvas5.width = 500;

let gradient = ctx5.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0.1, '#CD5C5C 	');
gradient.addColorStop(0.3, '#8B0000');
gradient.addColorStop(0.5, '#FF0000');
gradient.addColorStop(0.7, '#c72c48');
gradient.addColorStop(0.9, '#DC143C');
ctx5.fillStyle = gradient;
ctx5.fillRect(10, 10, 480, 330);

