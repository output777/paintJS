const canvas = document.getElementById('jsCanvas');
const color = document.querySelectorAll('.color');
const ctx = canvas.getContext('2d');

canvas.width = 900;
canvas.height = 850;
ctx.lineWidth = 1;
ctx.strokeStyle = '#212529';
let stroke = false;

function mouseMoveHandler(event) {
  let x = event.offsetX;
  let y = event.offsetY;
  if (!stroke) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function colorChangeHandler(event) {
  ctx.strokeStyle = event.target.style.backgroundColor;
}

function mouseDownHandler() {
  stroke = true;
}

function stopHandler() {
  stroke = false;
}

if (canvas) {
  canvas.addEventListener('mousemove', mouseMoveHandler);
  canvas.addEventListener('mousedown', mouseDownHandler);
  canvas.addEventListener('mouseleave', stopHandler);
  canvas.addEventListener('mouseup', stopHandler);
  color.forEach((el) => {
    el.addEventListener('click', colorChangeHandler);
  });
}

// ㄹㄴㅇㄹㅇ널ㄴㄹㄴㅇㄹㅇㄴㄹ
