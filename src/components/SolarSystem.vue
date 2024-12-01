<script setup>
import * as THREE from 'three';
import { onMounted } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

onMounted(() => {
    const container = document.getElementById('solar-system-div');
    const sizes = container.getBoundingClientRect();

    // Scene setup
    const scene = new THREE.Scene();
  // Set up the Orthographic Camera
    const aspectRatio = sizes.width / sizes.height;
    const cameraSize = 35;  // This controls the visible area of the camera
    const camera = new THREE.OrthographicCamera(
        cameraSize * aspectRatio,  // left plane
        -cameraSize * aspectRatio,   // right plane
        cameraSize,                 // top plane
        -cameraSize,                // bottom plane
        0.1,                        // near plane
        1000                        // far plane
    );
    const renderer = new THREE.WebGLRenderer({alhpa: true}); // Enable transparent background
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor(0x000000, 0); // Set clear color to transparent
    container.appendChild(renderer.domElement);
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.enableZoom = false
    controls.update()

    // // Create a 3D grid of AxesHelper to show the position of the axes
    // const axesHelper = new THREE.AxesHelper(5); // The argument is the size of the axis lines
    // scene.add(axesHelper);

const colors = {
    darkpink: 0xFF99C8,
    pink: 0xF1C0E8,
    yellow: 0xFCF6BD,
    purple: 0xCEBAF0,
    orange: 0xFDE3CE,
    lightblue: 0x8EECF5,
    green:  0xD0F4DD 
};




    // Sphere geometry and material (yellow color)
    const sun = new THREE.SphereGeometry(2, 30, 30);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: colors.yellow }); // Yellow color
    const sphere = new THREE.Mesh(sun, sunMaterial);

    // Planet 2 - Pink
    const planet2Geometry = new THREE.SphereGeometry(0.3, 30, 30);
    const planet2Material = new THREE.MeshBasicMaterial({ color: colors.pink });
    const planet2 = new THREE.Mesh(planet2Geometry, planet2Material);

    // Planet 3 - Green
    const planet3Geometry = new THREE.SphereGeometry(0.5, 30, 30);
    const planet3Material = new THREE.MeshBasicMaterial({ color: colors.lightblue});
    const planet3 = new THREE.Mesh(planet3Geometry, planet3Material);


    // Planet 4 - Orange
    const planet4Geometry = new THREE.SphereGeometry(0.7, 30, 30);
    const planet4Material = new THREE.MeshBasicMaterial({ color: colors.green });
    const planet4 = new THREE.Mesh(planet4Geometry, planet4Material);


    // Planet 5 - Blue
    const planet5Geometry = new THREE.SphereGeometry(1, 30, 30);
    const planet5Material = new THREE.MeshBasicMaterial({ color: colors.orange });
    const planet5 = new THREE.Mesh(planet5Geometry, planet5Material);



    // Planet 6 - Pink
    const planet6Geometry = new THREE.SphereGeometry(1.3, 30, 30);
    const planet6Material = new THREE.MeshBasicMaterial({ color: colors.purple });
    const planet6 = new THREE.Mesh(planet6Geometry, planet6Material);

    // Planet 7 - Green
    const planet7Geometry = new THREE.SphereGeometry(1.5, 30, 30);
    const planet7Material = new THREE.MeshBasicMaterial({ color: colors.pink });
    const planet7 = new THREE.Mesh(planet7Geometry, planet7Material);


    // Planet 9 - Blue
    const planet9Geometry = new THREE.SphereGeometry(1.8, 30, 30);
    const planet9Material = new THREE.MeshBasicMaterial({ color: colors.orange });
    const planet9 = new THREE.Mesh(planet9Geometry, planet9Material);


    
    scene.add(sphere, planet2, planet3, planet4, planet5, planet6, planet7, planet9);

    // Camera position
    camera.position.z = -250;
    camera.position.y = 10
    camera.lookAt(sphere.position)


    // Animation loop
    let angle = 0
    const speeds = {
        planet2: 11,
        planet3: 8.1,
        planet4: 7.3,
        planet5: 5.2,
        planet6: 3.3,
        planet7: 1,
        planet8: 0.5,
        planet9: 0.3
    }
    let angles = {
        planet2: 0,
        planet3: 0,
        planet4: 0,
        planet5: 0,
        planet6: 0,
        planet7: 0,
        planet8: 0,
        planet9: 0
    };

    const animate = () => {
        angle += 0.01;
           // Update the position of each planet, adjusting its own angle speed
    angles.planet2 += 0.01 * speeds.planet2;  // Planet 2
    planet2.position.set(4 * Math.cos(angles.planet2), 0, 4 * Math.sin(angles.planet2));

    angles.planet3 += 0.01 * speeds.planet3;  // Planet 3
    planet3.position.set(7 * Math.cos(angles.planet3), 0, 7 * Math.sin(angles.planet3));

    angles.planet4 += 0.01 * speeds.planet4;  // Planet 4
    planet4.position.set(9 * Math.cos(angles.planet4), 0, 9 * Math.sin(angles.planet4));

    angles.planet5 += 0.01 * speeds.planet5;  // Planet 5
    planet5.position.set(13 * Math.cos(angles.planet5), 0, 13 * Math.sin(angles.planet5));

    angles.planet6 += 0.01 * speeds.planet6;  // Planet 6
    planet6.position.set(15 * Math.cos(angles.planet6), 0, 15 * Math.sin(angles.planet6));

    angles.planet7 += 0.01 * speeds.planet7;  // Planet 7
    planet7.position.set(22 * Math.cos(angles.planet7), 0, 22 * Math.sin(angles.planet7));

    angles.planet9 += 0.01 * speeds.planet9;  // Planet 9
    planet9.position.set(30 * Math.cos(angles.planet9), 0, 30 * Math.sin(angles.planet9));


        controls.update()
        renderer.render(scene, camera);
    };

    // Set up animation loop
    renderer.setAnimationLoop(animate);
});
</script>

<template>
    <div id="solar-system-div" class="w-screen md:w-full h-full md:rotate-[-10deg]"></div>
</template>
