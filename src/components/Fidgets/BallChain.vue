<script setup>
import Matter from 'matter-js'
import { onMounted, ref, nextTick } from 'vue';
const { Engine, Body, Bodies, Composite, Constraint, Composites, Mouse, MouseConstraint } = Matter;
let engine, render, runner;
let canvas, ctx;
let bodies = [];
let totalBalls = 15
let num = 5;
let radius = 15;
let chain1, chain2, chain3, mouse, mouseConstraint;
let bubble = []
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



class Ball {
  constructor(color){
    this.color = color;
  }
  
  draw(x, y, lineX, lineY){
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    if(lineX !== null){
        ctx.moveTo(x, y)
        ctx.lineTo(lineX, lineY)
    }
   
    ctx.fillStyle = this.color;
    ctx.stroke()
    ctx.fill();
  }
}

onMounted(() => {
    canvas = document.getElementById('canvas')
    ctx = canvas.getContext('2d')
    const fidgetWindow = document.getElementById('fidget-balls')
    let divHeight, divWidth;

    divWidth = fidgetWindow.clientWidth
    divHeight = fidgetWindow.clientHeight

    canvas.height = window.innerHeight / 0.7
    canvas.width = window.innerWidth


    engine = Engine.create()
    mouse = Mouse.create(fidgetWindow)
    mouseConstraint = MouseConstraint.create(engine, mouse)
   
   for(let i = 0; i < totalBalls; i++){
       let x = i * 10
       let y = Math.random() * 40
        let fixed = false
       if(i === 0 || i === 5 || i === 10){
           fixed = true
           y = 50
           console.log(fidgetWindow.clientWidth)
           x = canvas.width / 2
       }

       bodies[i] = Bodies.circle(x, y, radius, {isStatic: fixed})
   }

    chain1 = Composite.create()
    Composite.add(chain1, [bodies[0], bodies[1], bodies[2], bodies[3], bodies[4]])
    chain2 = Composite.create()
    Composite.add(chain2, [bodies[5], bodies[6], bodies[7], bodies[8], bodies[9]])
    chain3 = Composite.create()
    Composite.add(chain3, [bodies[10], bodies[11], bodies[12], bodies[13], bodies[14]])

    Composite.add(engine.world, [chain1, chain2, chain3, mouseConstraint])
    let options = {
        stiffness: 0.1,
        damping: 0.7,
        length: 40
    }
    Composites.chain(chain1, 0, 0, 0, 0, options)
    Composites.chain(chain2, 0, 0, 0, 0, options)
    Composites.chain(chain3, 0, 0, 0, 0, options)



    for(let i = 0; i < totalBalls; i++){
    let x = bodies[i].position.x
    let y = bodies[i].position.y

    bubble.push(new Ball(colors[i]))  
  }

    animation()
    
})



const animation = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  Engine.update(engine)

  for(let i = 0; i < totalBalls; i++){
      let x = bodies[i].position.x
      let y = bodies[i].position.y
      let lineX, lineY;
      if(i === 4 || i === 9 || i === 14){
        lineX = null
        lineY = null
    
      }
      else {
        lineX = bodies[i + 1].position.x
        lineY = bodies[i + 1].position.y
      }
    

      bubble[i].draw(x, y, lineX, lineY)
  }

  requestAnimationFrame(animation);
};




</script>


<template>
    <div id='fidget-balls' class="w-screen h-full m-auto bg-transparent">
        <canvas width="100%" height="100%" id="canvas" class="bg-transparent">

        </canvas>
    </div>
</template>