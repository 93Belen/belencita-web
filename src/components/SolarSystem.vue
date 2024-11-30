<script setup>
import * as THREE from 'three';
import { onMounted } from 'vue';

onMounted(() => {
    const container = document.getElementById('solar-system-div');
    const sizes = container.getBoundingClientRect();

    // Scene setup
    const scene = new THREE.Scene();
  // Set up the Orthographic Camera
    const aspectRatio = sizes.width / sizes.height;
    const cameraSize = 15;  // This controls the visible area of the camera
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
    blue: 0xA4C4F3,
};




    // Sphere geometry and material (yellow color)
    const sun = new THREE.SphereGeometry(2, 30, 30);
    const sunMaterial = new THREE.MeshToonMaterial({ color: colors.yellow }); // Yellow color
    const sphere = new THREE.Mesh(sun, sunMaterial);
    sphere.castShadow = true;

    // Planet 2 - Pink
    const planet2Geometry = new THREE.SphereGeometry(0.5, 30, 30);
    const planet2Material = new THREE.MeshToonMaterial({ color: colors.darkpink });
    const planet2 = new THREE.Mesh(planet2Geometry, planet2Material);
    planet2.needsUpdate = true

    // Planet 3 - Green
    const planet3Geometry = new THREE.SphereGeometry(0.6, 30, 30);
    const planet3Material = new THREE.MeshToonMaterial({ color: colors.lightblue});
    const planet3 = new THREE.Mesh(planet3Geometry, planet3Material);


    // Planet 4 - Orange
    const planet4Geometry = new THREE.SphereGeometry(1, 30, 30);
    const planet4Material = new THREE.MeshToonMaterial({ color: colors.pink });
    const planet4 = new THREE.Mesh(planet4Geometry, planet4Material);


    // Planet 5 - Blue
    const planet5Geometry = new THREE.SphereGeometry(1.3, 30, 30);
    const planet5Material = new THREE.MeshToonMaterial({ color: colors.blue });
    const planet5 = new THREE.Mesh(planet5Geometry, planet5Material);



    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 1); // Soft white light

    const sunLight = new THREE.PointLight(0xFFFF00, 100); // color, intensity, distance
    sunLight.position.set(sphere.position.x, sphere.position.y, sphere.position.z); // Position it at the center of the Sun
    sunLight.castShadow = true; // Enable shadow casting for the light


    planet2.castShadow = true
    planet2.receiveShadow = true
    planet3.castShadow = true
    planet3.receiveShadow = true
    planet4.castShadow = true
    planet4.receiveShadow = true
    planet5.castShadow = true
    planet5.receiveShadow = true

    
    scene.add(sphere, planet2, planet3, planet4, planet5, sunLight);

    // Camera position
    camera.position.z = 25;
    camera.position.y = 4
    camera.lookAt(sphere.position)

    camera.updateProjectionMatrix();

    // Animation loop
    let angle = 0
    const speeds = {
        planet2: 10,
        planet3: 7,
        planet4: 5,
        planet5: 2
    }

    const animate = () => {
        angle += 0.01;
        planet2.position.set(5 * Math.cos(angle + speeds.planet2), 0, 5 * Math.sin(angle + speeds.planet2));
        planet3.position.set(7 * Math.cos(angle + speeds.planet3), 0, 7 * Math.sin(angle + speeds.planet3));
        planet4.position.set(10 * Math.cos(angle + speeds.planet4), 0, 10 * Math.sin(angle + speeds.planet4));
        planet5.position.set(15 * Math.cos(angle + speeds.planet5), 0, 15 * Math.sin(angle + speeds.planet5));

        // // Rotate planets around their own axes
        // planet2.rotation.y += 50;  // Rotate planet2
        // planet3.rotation.y += 2;  // Rotate planet3
        // planet4.rotation.y += 15; // Rotate planet4
        // planet5.rotation.y += 5; // Rotate planet5

  camera.updateProjectionMatrix();
        renderer.render(scene, camera);
    };

    // Set up animation loop
    renderer.setAnimationLoop(animate);
});
</script>

<template>
    <div id="solar-system-div" class="w-screen md:w-full h-full md:rotate-[-10deg]"></div>
</template>
