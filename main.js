let cloudImg = document.getElementById("cloth-img");

// Set up canvas and 2D graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 400;
cnv.height = 400;

let x = 150;
let x2 = 175;
let sunY = 300;
let sunSize = 15;
let goop = 0;

requestAnimationFrame(gaga);
function gaga() {
// Still Image
ctx.clearRect(0, 0, cnv.width, cnv.height);
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 1000, 300);
ctx.fillStyle = "rgb(255, 0, 0)";
ctx.beginPath();
ctx.arc(200, 300, 15, 0, 2 * Math.PI);
ctx.fill();
ctx.fillStyle = "green";
ctx.fillRect(0, 300, 1000, 100);
ctx.drawImage(cloudImg, 150, 125);
ctx.drawImage(cloudImg, 175, 100);
requestAnimationFrame(gaga);
}

document.getElementById("btn1").addEventListener("click", funky);

function funky() {
    requestAnimationFrame(assignment1)
    function assignment1() {

        // Animations
        x--;
        x2++;
        if (sunY > 150) {
            sunY--;
        }
        if (sunSize < 50) {
            sunSize += 0.23;
        }
        if (goop < 255) {
            goop += 1.5;
        }

        // Sky
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        ctx.fillStyle = "blue";
        ctx.fillRect(0, 0, 1000, 300);

        // Sun
        ctx.fillStyle = `rgb(255, ${goop}, 0)`;
        ctx.beginPath();
        ctx.arc(200, sunY, sunSize, 0, 2 * Math.PI);
        ctx.fill();

        // Grass
        ctx.fillStyle = "green";
        ctx.fillRect(0, 300, 1000, 100);

        // Left Cloud
        ctx.drawImage(cloudImg, x, 125);

        // Right Cloud
        ctx.drawImage(cloudImg, x2, 100);

        requestAnimationFrame(assignment1);
    }
}