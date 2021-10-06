var canvas = document.getElementById('c3');
canvas.height = 500;
canvas.width = 400;
var ctx3 = canvas.getContext('2d');

let canv = document.querySelector("#c3");
canv.addEventListener("mouseenter", paintRectArc)
canv.addEventListener("mouseleave", clearCanvas)


function clearCanvas(event){
    ctx3.clearRect(0, 0, canvas.width, canvas.height);
}

function paintRectArc(event) {

    ctx3.lineWidth = 3;
    ctx3.strokeStyle = "black";

    ctx3.fillStyle = " red";
    ctx3.rect(50,50,200,200);
    ctx3.fill();
    ctx3.stroke();
    ctx3.fillStyle = "orange";
    ctx3.beginPath();
    ctx3.arc(150,150,80,0, Math.PI * 2 );
    ctx3.fill();
    ctx3.stroke();
  }
