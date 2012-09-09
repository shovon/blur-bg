$(function () {
    var imageLocation = "images/bg.jpg";
    
    var blur = $('#blur');
    var element = blur[0];
    var image = new Image();
    image.onload = function () {
        var canvasImage = new CanvasImage(element, this);
        canvasImage.blur(4);
    };
    image.src = imageLocation;
});
