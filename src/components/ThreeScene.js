import React, { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import SplineLoader from '@splinetool/loader';

function ThreeScene() {
  useEffect(() => {
    // Set up your camera, scene, renderer, and controls
    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      -50000,
      10000
    );
    camera.position.set(0, 0, 0);
    camera.quaternion.setFromEuler(new THREE.Euler(0, 0, 0));

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animate);
    document.body.appendChild(renderer.domElement);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;

    scene.background = new THREE.Color('#1d1e20');
    renderer.setClearAlpha(1);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.125;

    // Load the Spline scene
    const loader = new SplineLoader();
    loader.load(
      'https://prod.spline.design/9knLT2jR1-vkkpRL/scene.splinecode',
      (splineScene) => {
        scene.add(splineScene);
      }
    );

    function onWindowResize() {
      camera.left = window.innerWidth / -2;
      camera.right = window.innerWidth / 2;
      camera.top = window.innerHeight / 2;
      camera.bottom = window.innerHeight / -2;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate(time) {
      controls.update();
      renderer.render(scene, camera);
    }

    window.addEventListener('resize', onWindowResize);

    return () => {
      // Cleanup event listeners or other resources as needed
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  return null; // You don't need to render anything here
}

export default ThreeScene;



