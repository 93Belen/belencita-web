<script setup>
import { onMounted,ref, watch } from 'vue'
let canvas, ctx;
let cellSize = 10;
let gapSize = 5
let lineLength = 30
let lineWidth = 2
let colors = [
    '#8EECF5',  // lightblue
    '#CEBAF0',  // purple
    '#F1C0E8',  // pink
    '#D0F4DD',  // green
    '#A4C4F3',  // blue
    '#8EECF5',  // lightblue
    '#F1C0E8',  // pink
    '#D0F4DD',  // green
    '#CEBAF0',  // purple
    '#A4C4F3',  // blue
    '#F1C0E8',  // pink
    '#D0F4DD',  // green
    '#A4C4F3',  // blue
    '#CEBAF0',  // purple
    '#8EECF5',  // lightblue
];
const lines = ref([])
const mouse = ref({
    x: 0,
    y: 0
})

let lastTimestamp = 0

class Line {
  constructor(color, x, y){
    this.color = color;
    this.x = x
    this.y = y
    this.angle = Math.random() * 360
  }
  
  draw(angle){
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + Math.cos(angle) * lineLength, this.y + Math.sin(angle) * lineLength)
   
    ctx.strokeStyle = this.color;
    ctx.lineWidth = lineWidth
    ctx.stroke()
  }
}

const animation = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  lines.value.forEach(line => {
      line.draw(mouse.value.x)
  });
}

watch(mouse.value, () => {
animation()
})

onMounted(() => {
    canvas = document.getElementById('canvas-2')
    ctx = canvas.getContext('2d')
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth

     for(let y = 0; y < canvas.height; y++){
        for(let x = 0; x < canvas.width; x++){
            const random = Math.round(Math.random() * colors.length)
            const line = new Line(colors[random], x * cellSize, y * cellSize)
            line.draw(random)
            lines.value.push(line)
        }
    }



    const fidgetWindow = document.getElementById('fidget-lines')
    fidgetWindow.addEventListener('mousemove', (e)=> {
    mouse.value.x = e.clientX
    mouse.value.y = e.clientY
    console.log(mouse.value)
})
})


</script>




<template>
    <div id='fidget-lines' class="w-full h-full m-auto bg-transparent overflow-hidden">
        <canvas width="100%" height="100%" id="canvas-2" class="bg-transparent">

        </canvas>
    </div>
</template>