var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
var endPercent = 80;
//this will wipe out all existing image data on the canvas
canvas.width = document.body.clientWidth;
canvas.height = canvas.width;

//this will preserve image data on the canvas
canvas.style.width = canvas.width;
canvas.style.height = canvas.width;

var progressCircle = function (context, totalPercent) {
    context.lineWidth = 50;
    context.strokeStyle = '#b3cf3c';

    var x = canvas.width / 2;
    var y = canvas.height / 2;
    var radius = x - context.lineWidth;
    var circumference = Math.PI * 2;
    var startAngle = -Math.PI / 2;
    var curPercent = 0;

    return {
        draw: function () {
            var arcLength = startAngle + ((curPercent / 100) * circumference);
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(x, y, radius, startAngle, arcLength, false);
            context.stroke();
        },
        increment: function () {
            curPercent+= 1;
        },
        done: function () {
            return curPercent > totalPercent;
        }
    }
};

function animate(shape) {
    shape.draw();
    shape.increment();
    if (!shape.done()) {
        requestAnimationFrame(function () {
            animate(shape);
        });
    }
}

animate(progressCircle(context, endPercent));