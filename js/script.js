var canvas = document.getElementById('c1');
canvas.height = 800;
canvas.width = window.innerWidth;
var ctx = canvas.getContext('2d');

function getRndInteger(min, max) {

     return Math.floor(Math.random() * (max - min)) + min;
}


function getRandomColor() {
     var o = Math.round, r = Math.random, s = 255;
     return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}


// Рисует 4 прямоуголиника  и линии случайного цветы и случайной длины зависящих от размера окна браузера
for (var step = 1; step <= 4; step++) {

     var rndWidth = getRndInteger(0, window.innerWidth);
     var rndHeight = getRndInteger(0, 800);
     var rndX = getRndInteger(0, window.innerWidth);
     var rndY = getRndInteger(0, 800);

     if (step % 2 == 0) {

          ctx.beginPath();
          ctx.lineWidth = getRndInteger(0, 15)
          ctx.strokeStyle = getRandomColor();
          ctx.moveTo(rndWidth - rndY, rndHeight - rndX);
          ctx.lineTo(rndX, rndY);
          ctx.stroke();

          ctx.beginPath();
          ctx.fillStyle = getRandomColor();
          ctx.fillRect(rndWidth, rndHeight, rndWidth, rndHeight);
     }
     else {

          ctx.beginPath();
          ctx.lineWidth = getRndInteger(0, 15)
          ctx.strokeStyle = getRandomColor();
          ctx.moveTo(rndWidth - rndY, rndHeight - rndX);
          ctx.lineTo(rndX, rndY);
          ctx.stroke();

          ctx.beginPath();
          ctx.strokeStyle = getRandomColor();
          ctx.lineWidth = 10;
          ctx.rect(rndWidth, rndHeight, rndWidth, rndHeight);
          ctx.stroke();

     }

}


function getCentrWidth(ctx,X, x) {
     var centr = window.innerWidth;
     ctx.translate((centr) / X - x, 0);
 }
/// Задание 2



var canvas2 = document.getElementById('c2');
canvas2.height = 1000;
canvas2.width = window.innerWidth;
var ctx2 = canvas2.getContext('2d');

getCentrWidth(ctx2,2, 500);

function horizontalLine(moveToX, lineToX, y, lineColor, lineWidth) {

     ctx2.beginPath();
     ctx2.strokeStyle = lineColor;
     ctx2.lineWidth = lineWidth;
     ctx2.moveTo(moveToX, y);
     ctx2.lineTo(lineToX, y);
     ctx2.stroke();
}

function verticalLine(moveToY, lineToY, x, lineColor, lineWidth) {

     ctx2.beginPath();
     ctx2.strokeStyle = lineColor;
     ctx2.lineWidth = lineWidth;
     ctx2.moveTo(x, moveToY);
     ctx2.lineTo(x, lineToY);
     ctx2.stroke();
}


for (var step = 100; step <= 900; step += 100) {

     if (step == 500) {

          horizontalLine(100, 900, step, 'green', '10')
     }

     else if ((step == 300) || (step == 700)) {

          horizontalLine(100, 900, step, 'lawngreen', '5')
     }

     else {

          horizontalLine(100, 900, step, 'blue', '3')
     }


}

for (var step = 100; step <= 900; step += 100) {


     if (step == 500) {

          verticalLine(100, 900, step, 'green', '10')
     }

     else if (step == 300 || step == 700) {

          verticalLine(100, 900, step, 'lawngreen', '5')
     }

     else {

          verticalLine(100, 900, step, 'blue', '3')
     }


}
ctx2.beginPath();
ctx2.strokeStyle = 'blue';
ctx2.lineWidth = 10;
ctx2.rect(100, 100, 800, 800);
ctx2.stroke();








