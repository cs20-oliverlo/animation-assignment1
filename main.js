let cloudImg = document.getElementById("cloth-img");

// Set up canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

requestAnimationFrame(assignment1)
function assignment1() {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, 1000, 300);
    ctx.fillStyle = "red";
    ctx.beginPath();
    ctx.arc(200, 300, 15, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 300, 1000, 100);
    ctx.drawImage(cloudImg, 150, 125);
    ctx.drawImage(cloudImg, 175, 100);

    requestAnimationFrame(assignment1);
}