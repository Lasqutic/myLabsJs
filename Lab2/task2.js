var canvas = document.getElementById('c2');

var ctx2 = canvas.getContext('2d');
canvas.height = 600;
canvas.width = window.innerWidth;

getCentrWidth(ctx2, 2, 300);

function roundedRect(ctx, x, y, width, height, radius, fill = false) {

    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.lineTo(x, y + height - radius);
    ctx.quadraticCurveTo(x, y + height, x + radius, y + height);
    ctx.lineTo(x + width - radius, y + height);
    ctx.quadraticCurveTo(x + width, y + height, x + width, y + height - radius);
    ctx.lineTo(x + width, y + radius);
    ctx.quadraticCurveTo(x + width, y, x + width - radius, y);
    ctx.lineTo(x + radius, y);
    ctx.quadraticCurveTo(x, y, x, y + radius);
    ctx.stroke();
    if (fill == true)
        ctx.fill();


}


//#region Gosts

function getGhost(x, y, collor, xEye = 0, yEye = 0) {

    ctx2.fillStyle = collor;
    ctx2.beginPath();
    ctx2.arc(x, y, 20, 0, Math.PI * 2);
    ctx2.fill();
    ctx2.fillRect(x - 20, y, 40, 20)
    ctx2.fill();
    //legs
    ctx2.beginPath();
    ctx2.arc(x - 15, y + 21, 5, 0, Math.PI * 2);
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x, y + 21, 5, 0, Math.PI * 2);
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x + 15, y + 21, 5, 0, Math.PI * 2);
    ctx2.fill();
    //eyes
    ctx2.fillStyle = "white";
    ctx2.beginPath();
    ctx2.arc(x - 7, y, 5, 0, Math.PI * 2);
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x + 8, y, 5, 0, Math.PI * 2);
    ctx2.fill();
    //eye pupil
    ctx2.fillStyle = "black";
    ctx2.beginPath();
    ctx2.arc(x - 7 + xEye, y + yEye, 2, 0, Math.PI * 2);
    ctx2.fill();
    ctx2.beginPath();
    ctx2.arc(x + 8 + xEye, y + yEye, 2, 0, Math.PI * 2);
    ctx2.fill();
}
//#endregion

//#region Game field

ctx2.lineWidth = 7;
ctx2.strokeStyle = "#33c";
ctx2.fillStyle = "black";

roundedRect(ctx2, 10, 10, 550, 550, 15, true);
roundedRect(ctx2, 25, 25, 520, 520, 15, true);

roundedRect(ctx2, 70, 80, 25, 85, 10, true);
roundedRect(ctx2, 70, 225, 25, 125, 10, true);
roundedRect(ctx2, 70, 405, 25, 85, 10, true);

roundedRect(ctx2, 470, 80, 25, 85, 10, true);
roundedRect(ctx2, 470, 225, 25, 125, 10, true);
roundedRect(ctx2, 470, 405, 25, 85, 10, true);

roundedRect(ctx2, 153, 80, 250, 55, 10, true);
roundedRect(ctx2, 153, 445, 250, 40, 10, true);

roundedRect(ctx2, 150, 225, 50, 125, 10, true);
roundedRect(ctx2, 350, 225, 50, 125, 10, true);
roundedRect(ctx2, 150, 299, 250, 55, 10, true);

ctx2.fillRect(150, 290, 50, 50);
ctx2.fillRect(350, 290, 50, 50);
ctx2.fillStyle = "#33c";
ctx2.fillRect(180, 222, 200, 3);


function getEat(numEat, x, y, vertical = false) {

    if (vertical == false)
        for (i = 0; i < numEat; i++) {
            ctx2.fillRect(x + i * 45, y, 10, 10);
        }
    else {
        for (i = 0; i < numEat; i++) {
            ctx2.fillRect(x, y + i * 45, 10, 10);
        }
    }
}

ctx2.fillStyle = "white";

getEat(10, 80, 42);
getEat(10, 80, 202);
getEat(10, 80, 380);
getEat(10, 80, 515);

getEat(11, 38, 42, true);
getEat(3, 125, 70, true);
getEat(3, 125, 240, true);
getEat(2, 125, 425, true);
getEat(3, 435, 75, true);
getEat(3, 435, 245, true);
getEat(2, 435, 425, true);
getEat(11, 523, 42, true);

getEat(5, 170, 425)
ctx2.lineWidth = 7;
ctx2.strokeStyle = "#33c";
ctx2.fillStyle = "black";
roundedRect(ctx2, 188, 357, 40, 40, 10, true);
roundedRect(ctx2, 328, 402, 40, 40, 10, true);

//#endregion

//#region mr pacman
ctx2.fillStyle = "orange";
ctx2.beginPath();
ctx2.arc(370, 168, 23, Math.PI / 7, -Math.PI / 7, false);
ctx2.lineTo(355, 168);
ctx2.closePath();
ctx2.fill();

//#endregion

getGhost(300, 250, 'red', 3, -2)
getGhost(230, 160, 'cyan', 3)
getGhost(50, 50, 'pink', 0, 2)
getGhost(330, 510, 'orange', -3)
