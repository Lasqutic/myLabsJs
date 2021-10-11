var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

var image = new Image();   // Размер изображения
image.onload = drawImageActualSize; // Рисуем изображение, когда оно будет загружено


const photoGallery =
    ['d.jpg', 'dd.jpg', 'ddd.jpg', 'dddd.jpg'
];

var index = 3;
const ENDPHOTOINDEX =  photoGallery.length-1
image.src = photoGallery[index];
image.onload = drawImageActualSize;

btnLeft.addEventListener('click', function btnLeftEvent(){
    index -= 1;
    if (index >=  0) {
        image.src = photoGallery[index];
        image.onload = drawImageActualSize;
    }
    else {
        index = ENDPHOTOINDEX;
        image.src = photoGallery[index];
        image.onload = drawImageActualSize;
    }
});

btnRight.addEventListener('click', function btnRightEvent(){
    index += 1;
    if (index <= ENDPHOTOINDEX) {
        image.src = photoGallery[index];
        image.onload = drawImageActualSize;
    }
    else {
        index = 0;
        image.src = photoGallery[index];
        image.onload = drawImageActualSize;
    }
});



function drawImageActualSize() {
    // use the intrinsic size of image in CSS pixels for the canvas element
    canvas.width = this.naturalWidth;
    canvas.height = this.naturalHeight;

    // will draw the image as 300x227 ignoring the custom size of 60x45
    // given in the constructor
   // ctx.drawImage(this, 0, 0);

    // To use the custom size we'll have to specify the scale parameters
    // using the element's width and height properties - lets draw one
    // on top in the corner:
    ctx.drawImage(this, 0, 0, this.width, this.height);
}