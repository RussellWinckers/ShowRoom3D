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
        this.controls = this.experience.world.controls

        this.setMonsterTruck()
        this.setSportCar()
        this.setRellyCar()

        //MAIN VAR
        this.animationTriggered = false;
    }

    setMonsterTruck() {
        //GET CAR METERIALS
        console.log(this.actualRoom)
        this.monsterTruck = this.actualRoom.getObjectByName('car1')
        this.monsterTruckMainColor = this.actualRoom.getObjectByName('Cylinder015_4')
        this.monsterTruckStripeColor = this.actualRoom.getObjectByName('Cylinder015_8')

        //ADD BUTTONS IN HTML
        this.monsterTruckBtn = document.createElement('div')
        this.monsterTruckBtn.classList.add('monsterTruckBtn')
        document.body.appendChild(this.monsterTruckBtn)

        //BUTTON CLICK
        this.monsterTruckBtn.addEventListener('click', () => {
            if (!gsap.isTweening(this.camera.perspectiveCamera.position)) {
                
                gsap.to(this.camera.perspectiveCamera.position, {
                    duration: 0.5,
                    y: this.zoom ? 0.5 : 0,
                    z: this.zoom ? 0.8 : 0.5,
                    onUpdate: () => {
                        this.actualRoom.getObjectByName('room').visible = this.zoom ? false : true
                        this.actualRoom.getObjectByName('stands').visible = this.zoom ? false : true
                    },
                    onended: () =>{

                        this.animationTriggered = true;
                    } 
                })
                gsap.to(this.camera.perspectiveCamera.ratation, {
                    duration: 0.5,
                    x: this.zoom ? -0.3 : 0
                })
                gsap.to(this.monsterTruck.position, {
                    duration: 0.5,
                    x: this.zoom ? 0.7969233989715576 : 0.7,
                    y: this.zoom ? 1.6639673709869385 : 0,
                    z: this.zoom ? 1.2393958568572998 : 0
                })
            }
            //PAS 'ZOOM' AAN
            this.zoom = !this.zoom
        })

    }

    setSportCar() {
        //GET CAR METERIALS


        //ADD BUTTONS IN HTML
        this.sportCarBtn = document.createElement('div')
        this.sportCarBtn.classList.add('sportCarBtn')
        document.body.appendChild(this.sportCarBtn)

        //BUTTON CLICK


    }

    setRellyCar() {
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
        console.log('test')
        if (this.camera.perspectiveCamera.position.z === 0.4 && this.camera.perspectiveCamera.position.y === 0.3) {
            console.log('hoi')
        }
    }
}