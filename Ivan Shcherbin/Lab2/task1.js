var canvas = document.getElementById('c1');
canvas.height = 700;
canvas.width = window.innerWidth;

var ctx = canvas.getContext('2d');

function getCentrWidth(ctx, X, x) {
    var centr = canvas.width;
    ctx.translate((centr) / X - x, 0);
}

function getSpiral(ctx,centerX, centerY, vitNum, indent, color) {

    ctx.moveTo(centerX, centerY);
    ctx.beginPath();
    for (i = 0; i < vitNum; i++) {
        angle = 0.1 * i;
        x = centerX + (1 + indent * angle) * Math.cos(angle);
        y = centerY + (1 + indent * angle) * Math.sin(angle);

        ctx.lineTo(x, y);
    }
    ctx.lineWidth = "1";
    ctx.strokeStyle = color;
    ctx.stroke();
}

getCentrWidth(ctx, 2, 100);

getSpiral(ctx,100, 320, 2000, 2, "red");

//#region smile

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(100, 325, Math.floor(440 * 0.25), 0, 2 * Math.PI);
ctx.closePath();
ctx.fill();
ctx.lineWidth = 2;
ctx.stroke();
ctx.fillStyle = "pink";

//eyes
ctx.beginPath();
ctx.arc(50, 300, Math.floor(100 * 0.25), 0, 2 * Math.PI);
ctx.arc(150, 300, Math.floor(100 * 0.25), 0, 2 * Math.PI);
ctx.closePath();
ctx.fill();

//mouth
ctx.beginPath();
ctx.arc(100, Math.round(750 * 0.52), Math.round(440 * 0.13), Math.PI, 2 * Math.PI, false);
ctx.closePath();
ctx.fill();

//#endregion


getSpiral(ctx,100, 320, 10000, 1, "green");

//#region rhombus
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = "5";
ctx.moveTo(100, 160);
ctx.lineTo(270, 325);
ctx.lineTo(100, 480);
ctx.lineTo(-70, 325);
ctx.closePath()
ctx.stroke();
//#endregion

//#region zigzag
ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.lineWidth = "3";
ctx.moveTo(300, 200);
ctx.lineTo(350, 200);
ctx.lineTo(350, 200);
ctx.lineTo(270, 230);
ctx.lineTo(300, 250);
ctx.stroke();
//#endregion

//#region Triangle

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = "5";
ctx.moveTo(100, 10);
ctx.lineTo(-200, 490);
ctx.lineTo(400, 490);
ctx.closePath()
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = "5";
ctx.moveTo(-200, 150);
ctx.lineTo(400, 150);
ctx.lineTo(100, 650);
ctx.closePath()
ctx.stroke();

//#endregion

//#region  trapezoid 
ctx.beginPath();
ctx.strokeStyle = "rgba(0,0,0,0.5)";
ctx.lineWidth = "3";
ctx.moveTo(-150, 190);
ctx.lineTo(-50, 190);
ctx.lineTo(-80, 230);
ctx.lineTo(-120, 230);
ctx.closePath()
ctx.fillStyle = "rgba(0,0,0,0.5)";
ctx.fill();
ctx.stroke();
//#endregion