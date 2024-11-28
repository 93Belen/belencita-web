<script setup>
import { onMounted, ref, onUnmounted } from 'vue'

let canvas, ctx;
let cellSize = 10; // Increased size to reduce number of lines
let gapSize = 5; // Increased gap to reduce number of lines
let lineLength = 30; // Increased length for better visibility
let lineWidth = 3;
let colors = [
  '#8EECF5', '#CEBAF0', '#F1C0E8', '#D0F4DD', '#A4C4F3',
  '#8EECF5', '#F1C0E8', '#D0F4DD', '#CEBAF0', '#A4C4F3',
];

const lines = ref([]);
const mouse = ref({ x: 0, y: 0 });
const container = ref(null)

class Line {
  constructor(color, x, y) {
    this.color = color;
    this.x = x;
    this.y = y;
    this.angle = Math.random() * Math.PI * 2;
  }

  updateAngle(mouseX, mouseY) {
    const dx = mouseX - this.x;
    const dy = mouseY - this.y;
    this.angle = Math.atan2(dy, dx);
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(
      this.x + Math.cos(this.angle) * lineLength,
      this.y + Math.sin(this.angle) * lineLength
    );
    ctx.strokeStyle = this.color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }
}

let lastTimestamp = 0;
let animationId;



const animation = () => {
  const now = performance.now();
  const delta = now - lastTimestamp;

  // Throttle animation to 60fps
  if (delta > 1000 / 60) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    lines.value.forEach(line => {
      line.updateAngle(mouse.value.x, mouse.value.y); // Update line angle towards mouse
      line.draw(); // Draw the line with the new angle
    });

    lastTimestamp = now; // Update the last timestamp
  }

  animationId = requestAnimationFrame(animation); // Request next frame
};

onMounted(() => {
  canvas = document.getElementById('canvas-2');
  ctx = canvas.getContext('2d');
    canvas.height = 350
    canvas.width = window.innerWidth < 769 ? window.innerWidth : window.innerWidth / 3

  // Create lines with more space between them
  for (let y = 0; y < canvas.height; y += cellSize + gapSize) {
    for (let x = 0; x < canvas.width; x += cellSize + gapSize) {
      const random = Math.floor(Math.random() * colors.length);
      const line = new Line(colors[random], x, y);
      lines.value.push(line);
    }
  }

    const div = document.getElementById('fidget-lines')
    div.addEventListener('touchmove', handleTouch, { passive: false });
  // Start the animation loop
  animation();
});


const handleMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.value.x = e.clientX - rect.left;  // Adjust for canvas position
    mouse.value.y = e.clientY - rect.top;   // Adjust for canvas position
};


const handleTouch = (e) => {
  // Prevent default touch actions (e.g., scrolling or zooming)
  e.preventDefault();

  const rect = canvas.getBoundingClientRect();
  // Get the first touch point (e.touches[0])
  const touch = e.touches[0];

  // Adjust the touch coordinates relative to the canvas
  mouse.value.x = touch.clientX - rect.left; // Adjust for canvas position
  mouse.value.y = touch.clientY - rect.top;  // Adjust for canvas position
};



onUnmounted(() => {
    cancelAnimationFrame(animationId)
})


</script>

<template>
  <div @mousemove="handleMouseMove"  id="fidget-lines" class="w-full h-full m-auto bg-transparent overflow-hidden">
    <canvas width="100%" height="100%" id="canvas-2" class="bg-transparent"></canvas>
  </div>
</template>
