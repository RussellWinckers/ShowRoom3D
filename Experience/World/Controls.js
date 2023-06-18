import * as THREE from "three";
import Experience from "../Experience.js";

export default class Controls {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.camera = this.experience.camera
        this.time = this.experience.time
        this.sizes = this.experience.sizes
        this.cars = this.experience.world.cars

        // this.setControls()

        //MAIN VAR
        this.controlsEnabled = false;
    }
    setControls(){
        this.cursor = {
            x: 0,
            y: 0
        }

        
        window.addEventListener('mousemove', (event) => {
            this.cursor.x = event.clientX / this.sizes.width - 0.5;
            this.cursor.y = - (event.clientY / this.sizes.height - 0.5);

            if (this.cars.animationTriggered) {
                // Enable controls only if the animation has been triggered
                this.controlsEnabled = true;
            }
        });
    }
    resize() {
        
    }

    update() {
        //SIMPLE CONTROLS
        // this.camera.perspectiveCamera.position.x = this.cursor.x * 1
        // this.camera.perspectiveCamera.position.y = this.cursor.y * 1 

        //COMPLEX CONTROLS
        // console.log(this.controlsEnabled)
        if (this.controlsEnabled) {
        this.camera.perspectiveCamera.position.x = Math.sin(this.cursor.x * Math.PI * 1) * 0.5
        this.camera.perspectiveCamera.position.z = Math.cos(this.cursor.x * Math.PI * 1) * 0.5
        this.camera.perspectiveCamera.position.y = this.cursor.y * 0.5
        this.camera.perspectiveCamera.lookAt(new THREE.Vector3())
        }

    }
}