const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

//resizing
canvas.height = window.innerHeight - $('h1').outerHeight(true) - 30; 
canvas.width = window.innerWidth - 70 - 3*2 - 30;

//vars
let painting = false;

function startPosition(e) {
    painting = true;
    draw(e);
}

function finishPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting)
        return;

    var rect = e.target.getBoundingClientRect();
    ctx.lineWidth = document.getElementById("width").value;
    ctx.lineCap = 'round';

    ctx.strokeStyle = document.getElementById("color").value;

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function clear_canvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//event listeners
canvas.addEventListener('mousedown', startPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', finishPosition);
canvas.addEventListener('mouseout', finishPosition);