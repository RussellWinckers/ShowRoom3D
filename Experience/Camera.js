import * as THREE from "three";
import Experience from "./Experience.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default class Camera {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;

        this.createPerspectiveCamera();
        // this.setOrbitControls()


    }

    createPerspectiveCamera() {
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            75,
            this.sizes.aspect,
            0.1,
            1000
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.rotation.x = -0.3
        this.perspectiveCamera.position.z = 1;
        this.perspectiveCamera.position.y = 0.5;

        const size = 10;
        const divisions = 10;

        this.gridHelper = new THREE.GridHelper(size, divisions);
        this.scene.add(this.gridHelper);

        const axesHelper = new THREE.AxesHelper(5);
        this.scene.add(axesHelper);


    }

    setOrbitControls() {
        this.contorls = new OrbitControls(this.perspectiveCamera, this.canvas)
        this.contorls.enableDamping = true
        this.contorls.enableZoom = true
    }



    resize() {
        // Updating Perspective Camera on Resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
    }

    update() {
        // this.contorls.update()
    }
}