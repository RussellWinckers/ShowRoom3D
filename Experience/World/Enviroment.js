import * as THREE from "three";
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper";
import Experience from "../Experience.js";

export default class Enviroment {
    constructor() {
        this.experience = new Experience();
        
        this.scene = this.experience.scene
        this.resources = this.experience.resources


      

        this.setSunlight()
        this.setAmbientLight()
        this.setLamp()
    }
    setSunlight(){
        this.sunLight = new THREE.DirectionalLight('#ffffff', 0.3)
        this.sunLight.castShadow = true
        this.sunLight.shadow.camera.far = 50
        this.sunLight.shadow.mapSize.set(1024,1024)
        this.sunLight.shadow.normalBias = 0.05
        this.sunLight.position.set(1, 1.6, 3)
        this.scene.add(this.sunLight)

        this.sunLightHelper = new THREE.DirectionalLightHelper(this.sunLight, 1)
        this.scene.add(this.sunLightHelper)
    }

    setAmbientLight(){
        this.ambientLight = new THREE.AmbientLight('#ffffff', 0.2)
        this.scene.add(this.ambientLight)

    }
    setLamp(){
        this.pointLightLamp = new THREE.PointLight('#ffffff', 0.5)
        this.pointLightLamp.distance = 1.5
        this.pointLightLamp.position.set(-0.87, 0.59, -0.05)
        this.scene.add(this.pointLightLamp)
    }

    
    resize() {
        
    }

    update() {
        
    }
}