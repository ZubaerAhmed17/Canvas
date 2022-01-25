"use strict";
// Declare variables
const FPS = 30;
let size = 30;
let bx, by;
let velocityX, velocityY;
let canvas, context;
// Load canvas
canvas = document.getElementById("gameCanvas");
context = canvas.getContext("2d");
// Set up game loop
setInterval(update, 1000 / FPS);
// Starting position
bx = canvas.width / 2;
by = canvas.height / 2;
// Moving speed
velocityX = Math.floor(Math.random() * 76 + 25) / FPS;
velocityY = Math.floor(Math.random() * 76 + 25) / FPS;
if (Math.floor(Math.random() * 2) == 0) {
    velocityX = -velocityX;
}
else if (Math.floor(Math.random() * 2) == 0) {
    velocityY = -velocityY;
}
function update() {
    bx += velocityX;
    by += velocityY;
    if (bx - size / 2 < 0 && velocityX < 0) {
        velocityX = -velocityX;
    }
    if (bx + size / 2 > canvas.width && velocityX > 0) {
        velocityX = -velocityX;
    }
    if (by - size / 2 < 0 && velocityY < 0) {
        velocityY = -velocityY;
    }
    if (by + size / 2 > canvas.width && velocityY > 0) {
        velocityY = -velocityY;
    }
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "blue";
    context.fillRect(bx - size / 2, by / 2, size, size);
}
