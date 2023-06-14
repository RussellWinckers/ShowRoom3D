import * as THREE from "three"
import Experience from "../Experience.js"

export default class EditCars {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.room = this.resources.items.room
        this.actualRoom = this.room.scene
    

        this.changeCars()
    }
    changeCars(){
        console.log(this.actualRoom.getObjectByName('monsterTruck'));
        this.actualRoom.getObjectByName('Cube057').material.color.setHex(0x00ff00)
        // this.actualRoom.getObjectByName('monsterTruck').material
    }

    
    resize() {
        
    }

    update() {
        
    }
}