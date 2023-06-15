import * as THREE from "three"
import gsap from 'gsap'
import Experience from "../Experience.js"

export default class Cars {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.resources = this.experience.resources
        this.room = this.resources.items.room
        this.actualRoom = this.room.scene

        this.changeCars()
        this.setMonsterTruck()
        this.setSportCar()
        this.setRellyCar()
    }
    changeCars(){
        console.log(this.actualRoom);
        
        
        

    }
    setMonsterTruck(){
        //GET CAR METERIALS
        this.monsterTruckMainColor = this.actualRoom.getObjectByName('Cylinder015_4')
        this.monsterTruckStripeColor = this.actualRoom.getObjectByName('Cylinder015_8')

        //ADD BUTTONS IN HTML
        this.monsterTruckBtn = document.createElement('div')
        this.monsterTruckBtn.classList.add('monsterTruckBtn')
        document.body.appendChild(this.monsterTruckBtn)

        //BUTTON CLICK
        console.log(this.camera.perspectiveCamera.position.y)
        this.monsterTruckBtn.addEventListener('click', () =>{
            if(!gsap.isTweening(this.camera.perspectiveCamera.position)){
            gsap.to(this.camera.perspectiveCamera.position, {
                duration: 0.5,
                y: this.zoom ? 0.5 : 0.3,
                z: this.zoom ? 1.2 : 0.4,
                onUpdate: () => {
                    this.actualRoom.getObjectByName('room').visible = this.zoom ? false : true
                    this.actualRoom.getObjectByName('stands').visible = this.zoom ? false : true
                    
                }
            })}
                
            //PAS 'ZOOM' AAN
            this.zoom = !this.zoom
            
            
        })
        
    }

    setSportCar(){
        //GET CAR METERIALS
        

        //ADD BUTTONS IN HTML
        this.sportCarBtn = document.createElement('div')
        this.sportCarBtn.classList.add('sportCarBtn')
        document.body.appendChild(this.sportCarBtn)

        //BUTTON CLICK
        
        
    }

    setRellyCar(){
        //GET CAR METERIALS
        

        //ADD BUTTONS IN HTML
        this.rellyCarBtn = document.createElement('div')
        this.rellyCarBtn.classList.add('rellyCarBtn')
        document.body.appendChild(this.rellyCarBtn)

        //BUTTON CLICK
        
        
    }

    
    resize() {
        
    }

    update() {
        
    }
}