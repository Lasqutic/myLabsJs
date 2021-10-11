
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
