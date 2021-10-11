var canvas = document.getElementById('c1');
canvas.height = 350;
canvas.width = window.innerWidth;

var ctx = canvas.getContext('2d');

function getCentrWidth(ctx, X, x) {
  var centr = canvas.width;
  ctx.translate((centr) / X - x, 0);
}

function getRandomColor() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
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












