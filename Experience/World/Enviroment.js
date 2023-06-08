import * as THREE from "three";
import Experience from "../Experience.js";

export default class Room {
    constructor() {
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources
    

        this.setSunlight()
        this.setPointLight()
        this.setAmbientLight()
    }
    setSunlight(){
        this.sunLight = new THREE.DirectionalLight('#ffffff', 3)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 20
        this.sunLight.shadow.mapSize.set(1024,1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(5, 2, 3)
        this.scene.add(this.sunLight)
    }
    setPointLight(){
        this.pointLight = new THREE.PointLight('#ffffff', 0.1, 50)
        this.pointLight.position.set(0, 2, -2)
        // this.scene.add(this.pointLight)
    }
    setAmbientLight(){
        this.ambientLight = new THREE.AmbientLight('#ffffff', 0.1)
        this.scene.add(this.ambientLight)
    }

    
    resize() {
        
    }

    update() {
        
    }
}