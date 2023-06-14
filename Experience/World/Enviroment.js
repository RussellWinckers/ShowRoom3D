import * as THREE from "three";
import Experience from "../Experience.js";

export default class Enviroment {
    constructor() {
        this.experience = new Experience();
        
        this.scene = this.experience.scene
        this.resources = this.experience.resources


      

        this.setSunlight()
        this.setAmbientLight()
        this.setPointLight()
    }
    setSunlight(){
        this.sunLight = new THREE.DirectionalLight('#ffffff', 0.6)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 50
        this.sunLight.shadow.mapSize.set(1024,1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(1, 1.6, 3)
        this.scene.add(this.sunLight)

        this.sunLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 1)
        this.scene.add(this.sunLightHelper)
    }

    setPointLight(){
        this.pointLight = new THREE.PointLight('#ffffff', 10, 0.5)
        // this.pointLight.castShadow = true
        this.pointLight.position.set(-0.88, 0.6, -0.05)
        this.scene.add(this.pointLight)

        this.pointLightHelper = new THREE.PointLightHelper(this.pointLight, 0.1)
        this.scene.add(this.pointLightHelper)
    }

    setAmbientLight(){
        this.ambientLight = new THREE.AmbientLight('#ffffff', 0.3)
        this.scene.add(this.ambientLight)
    }

    
    resize() {
        
    }

    update() {
        
    }
}