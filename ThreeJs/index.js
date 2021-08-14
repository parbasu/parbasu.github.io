import * as THREE from "https://unpkg.com/three@0.127.0/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.127.0/examples/jsm/controls/OrbitControls.js";
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);
// object
// Torus
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material);
//adding to the scene below

scene.add(torus);

// scroll Animation

function moveCamera() {
  // top prop here shows how far we are from the top of the webpage
  const t = document.body.getBoundingClientRect().top;
  moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;

  ani.rotation.y += 0.01;
  ani.rotation.z += 0.01;

  camera.rotation.z = t * -0.01;
  camera.rotation.x = t * -0.0002;
  camera.rotation.y = t * -0.0002;
}
// fire the func when scrolled
document.body.onscroll = moveCamera;
moveCamera(); // thr func is assigned as the event handler for the document body on scroll event

// Animation

// renderer.render( scene, camera );
// Alternate below
function animate() {
  requestAnimationFrame(animate);

  torus.rotation.x += 0.01; // rotation along x axis
  torus.rotation.y += 0.005; // roatation along y axis
  torus.rotation.z += 0.01; // rotation on z axis

  moon.rotation.x += 0.005;
  //controls.update();

  renderer.render(scene, camera);
}

animate();
