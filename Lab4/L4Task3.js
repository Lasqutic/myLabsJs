
var canvas3 = document.getElementById('c3');
var ctx3 = canvas3.getContext('2d');
canvas3.width = 500;
canvas3.height = 350;

canvas3.addEventListener('mousemove', function (event) {

    var r = event.offsetX;
    var g = event.offsetY;

    ctx3.fillStyle = 'rgb(' + r + ',' + g + ', 50 )';
    ctx3.fillRect(0, 0, 500, 350);
})
