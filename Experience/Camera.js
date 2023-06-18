import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera

        this.createPerspectiveCamera();
        this.setOrbitControls()


    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            75,
            this.sizes.aspect,
            0.1,
            1000
        );
        // this.perspectiveCamera.rotation.reorder('YXZ')
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.rotation.x = -0.3
        this.perspectiveCamera.position.z = 0.8;
        this.perspectiveCamera.position.y = 0.5

        const size = 10;
        const divisions = 10;

        this.gridHelper = new THREE.GridHelper(size, divisions);
        this.scene.add(this.gridHelper);

        const axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);


    }

    setOrbitControls() {
        this.controls = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.controls.enableDamping = true
        this.controls.enableZoom = true
        this.controls.enablePan = false
        // this.controls.autoRotate = true
        // this.controls.enableRotate = false

        // ROTATION range
        this.controls.maxPolarAngle = Math.PI / 2.2
        this.controls.maxAzimuthAngle = Math.PI / 3.5;
        this.controls.minAzimuthAngle = -Math.PI / 3.5;
    }



    resize() {
        // Updating Perspective Camera on Resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
    }

    update() {
        this.controls.update()
    }
}