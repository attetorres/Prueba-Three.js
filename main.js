import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 3;
camera.position.y = 1;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const light = new THREE.DirectionalLight(0xffffff, 3);
light.position.set(3, 1, 3);
scene.add(light);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshStandardMaterial({
    color: 0xF3E500
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube);

camera.lookAt(cube.position);

renderer.render(scene, camera);

function animate(){
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();