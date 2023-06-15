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
        this.setLampWorkBench()
        this.setTvLight()
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

    setLampWorkBench(){
        this.lampWorkBench = new THREE.RectAreaLight('#ffffff', 10, 0.04, 0.3)
        this.lampWorkBench.position.set(-0.87, 0.6, -0.05)
        this.lampWorkBench.rotation.x = - Math.PI / 2
        this.scene.add(this.lampWorkBench)
        //HELPER
        this.lampWorkBenchHelper = new RectAreaLightHelper(this.lampWorkBench)
        // this.scene.add(this.lampWorkBenchHelper)
    }
    setTvLight(){
        this.tvLight = new THREE.RectAreaLight('#ffffff', 10, 0.5, 0.3)
        this.tvLight.position.set(0.97, 0.43, 0.5)
        this.tvLight.rotation.y = Math.PI / 2
        this.scene.add(this.tvLight)

        //HELPEN
        this.tvLightHelper = new RectAreaLightHelper(this.tvLight)
        // this.scene.add(this.tvLightHelper)
    }

    setAmbientLight(){
        this.ambientLight = new THREE.AmbientLight('#ffffff', 0.05)
        this.scene.add(this.ambientLight)

    }

    
    resize() {
        
    }

    update() {
        
    }
}