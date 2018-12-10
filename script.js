let canvas = document.getElementById("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


class Point {

    constructor(size) {
        this.size = size;
        this.x =  Math.floor(Math.random() * canvas.width);
        this.y = Math.floor(Math.random() * canvas.height);
    }
}

function draw() {
    let ctx = canvas.getContext("2d");

    let point = new Point(50);

    ctx.beginPath();
    ctx.arc(point.x, point.y, point.size,0,2*Math.PI);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "green";
    ctx.lineWidth = 6;
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

}

(function(){
    draw();
    setTimeout(arguments.callee, 1000 * 0.5);
})();