import * as THREE from "three"
import gsap from 'gsap'
import Experience from "../Experience.js"
import { DoubleSide } from "three"

export default class Cars {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.camera = this.experience.camera
        this.resources = this.experience.resources
        this.room = this.resources.items.room
        this.actualRoom = this.room.scene
        this.controls = this.experience.world.controls

        this.setFloor()
        this.setMonsterTruck()
        this.setSportCar()
        this.setRellyCar()


        //MAIN VAR
        this.monsterTruckAnimationTrigger = true;
        this.sportCarAnimationTrigger = true;
        this.rellyCarAnimationTrigger = true;

    }

    setFloor() {
        this.floorGeometry = new THREE.PlaneGeometry(5, 5);
        this.floorMaterial = new THREE.MeshStandardMaterial({ color: 0xe8e8e8 });
        this.floor = new THREE.Mesh(this.floorGeometry, this.floorMaterial);
        this.floor.receiveShadow = true
        this.floor.rotation.x = - Math.PI / 2
        this.floor.position.y = -0.031
        this.scene.add(this.floor);
    }

    setMonsterTruck() {
        //GET HTML BUTTONS
        this.monsterTruckBtn = document.querySelector('.monsterTruckBtn')
        this.monsterTruckColorContainer = document.querySelector('.monsterTruckColorContainer')


        // THREE JS
        //BUTTON CLICK GSAP ANIMATION
        this.monsterTruckBtn.addEventListener('click', () => {
            if (!gsap.isTweening(this.camera.perspectiveCamera.position)) {

                gsap.to(this.camera.perspectiveCamera.position, {
                    duration: 0.5,
                    y: this.zoom ? 0.5 : 0,
                    z: this.zoom ? 0.8 : 0.5,
                    onUpdate: () => {
                        this.actualRoom.getObjectByName('room').visible = this.zoom ? false : true
                        this.actualRoom.getObjectByName('stands').visible = this.zoom ? false : true
                        this.actualRoom.getObjectByName('car2').visible = this.zoom ? false : true
                        this.actualRoom.getObjectByName('car3').visible = this.zoom ? false : true
                        this.monsterTruckAnimationTrigger = this.zoom ? false : true;
                    }
                })
                if (this.monsterTruckAnimationTrigger) {
                    this.floor.visible = false
                    this.scene.fog = new THREE.Fog(0xc7c7c7, 0.5, 2);
                    this.monsterTruckColorContainer.style.display = 'grid'
                    this.sportCarBtn.style.display = 'none'
                    this.rellyCarBtn.style.display = 'none'
                } else {
                    this.scene.fog = new THREE.Fog(0xc7c7c7, 5, 10);
                    this.monsterTruckColorContainer.style.display = 'none'
                    this.sportCarBtn.style.display = 'block'
                    this.rellyCarBtn.style.display = 'block'
                }

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

        //COLOR CHANGE BUTTONS
        //GET CAR METERIALS
        this.monsterTruck = this.actualRoom.getObjectByName('car1')
        this.monsterTruckMainColor = this.actualRoom.getObjectByName('Cylinder015_4')
        this.monsterTruckStripeColor = this.actualRoom.getObjectByName('Cylinder015_8')
        this.monsterTruckRims = this.actualRoom.getObjectByName('Cylinder015_12')

        //CHANGE CAR COLOR BUTTONS
        this.monsterTruckColorOne = document.querySelector('.monsterTruckColorOne')
        this.monsterTruckColorOne.addEventListener('click', () => {
            this.monsterTruckMainColor.material.color.setHex('0x23F100')
            this.monsterTruckRims.material.color.setHex('0x23F100')
            this.monsterTruckStripeColor.material.color.setHex('0xFFFFFF')

        })

        this.monsterTruckColorTwo = document.querySelector('.monsterTruckColorTwo')
        this.monsterTruckColorTwo.addEventListener('click', () => {
            this.monsterTruckMainColor.material.color.setHex('0x00F1F1')
            this.monsterTruckRims.material.color.setHex('0x00F1F1')
            this.monsterTruckStripeColor.material.color.setHex('0x000000')
        })

        this.monsterTruckColorThree = document.querySelector('.monsterTruckColorThree')
        this.monsterTruckColorThree.addEventListener('click', () => {
            this.monsterTruckMainColor.material.color.setHex('0x7500F1')
            this.monsterTruckRims.material.color.setHex('0x7500F1')
            this.monsterTruckStripeColor.material.color.setHex('0xFFEE00')
        })

    }

    setSportCar() {
        //GET HTML BUTTONS
        this.sportCarBtn = document.querySelector('.sportCarBtn')
        this.sportCarColorContainer = document.querySelector('.sportCarColorContainer')


        // THREE JS
        //BUTTON CLICK GSAP ANIMATION
        this.sportCarBtn.addEventListener('click', () => {
            if (!gsap.isTweening(this.camera.perspectiveCamera.position)) {

                gsap.to(this.camera.perspectiveCamera.position, {
                    duration: 0.5,
                    y: this.zoom ? 0.5 : 0,
                    z: this.zoom ? 0.8 : 0.5,
                    onUpdate: () => {
                        this.actualRoom.getObjectByName('room').visible = this.zoom ? false : true
                        this.actualRoom.getObjectByName('stands').visible = this.zoom ? false : true
                        this.actualRoom.getObjectByName('car1').visible = this.zoom ? false : true
                        this.actualRoom.getObjectByName('car3').visible = this.zoom ? false : true
                        this.sportCarAnimationTrigger = this.zoom ? false : true;
                    }
                })
                if (this.sportCarAnimationTrigger) {
                    this.floor.visible = false
                    this.scene.fog = new THREE.Fog(0xc7c7c7, 0.5, 2);
                    this.sportCarColorContainer.style.display = 'grid'
                    this.monsterTruckBtn.style.display = 'none'
                    this.rellyCarBtn.style.display = 'none'
                } else {
                    this.scene.fog = new THREE.Fog(0xc7c7c7, 5, 10);
                    this.sportCarColorContainer.style.display = 'none'
                    this.monsterTruckBtn.style.display = 'block'
                    this.rellyCarBtn.style.display = 'block'
                }
                gsap.to(this.sportCar.position, {
                    duration: 0.5,
                    x: this.zoom ? -4.197202205657959 : -0.65,
                    y: this.zoom ? 1.601052165031433 : 0,
                    z: this.zoom ? 1.2001322507858276 : 0
                })
            }
            //PAS 'ZOOM' AAN
            this.zoom = !this.zoom
        })
        //COLOR CHANGE BUTTONS
        //GET CAR METERIALS
        this.sportCar = this.actualRoom.getObjectByName('car2')
        this.sportCarMainColor = this.actualRoom.getObjectByName('Cylinder002_6')
        this.sportCarStripeColor = this.actualRoom.getObjectByName('Cylinder002_9')

        //CHANGE CAR COLOR BUTTONS
        this.sportCarColorOne = document.querySelector('.sportCarColorOne')
        this.sportCarColorOne.addEventListener('click', () => {
            this.sportCarMainColor.material.color.setHex('0xE78400')
            this.sportCarStripeColor.material.color.setHex('0x000000')

        })

        this.sportCarColorTwo = document.querySelector('.sportCarColorTwo')
        this.sportCarColorTwo.addEventListener('click', () => {
            this.sportCarMainColor.material.color.setHex('0x007FE7')
            this.sportCarStripeColor.material.color.setHex('0xFFFFFF')

        })

        this.sportCarColorThree = document.querySelector('.sportCarColorThree')
        this.sportCarColorThree.addEventListener('click', () => {
            this.sportCarMainColor.material.color.setHex('0x500C9C')
            this.sportCarStripeColor.material.color.setHex('0x000000')

        })

    }

    setRellyCar() {
        //GET HTML BUTTONS
        this.rellyCarBtn = document.querySelector('.rellyCarBtn')
        this.rellyCarColorContainer = document.querySelector('.rellyCarColorContainer')


        // THREE JS
        //BUTTON CLICK GSAP ANIMATION
        this.rellyCarBtn.addEventListener('click', () => {
            if (!gsap.isTweening(this.camera.perspectiveCamera.position)) {

                gsap.to(this.camera.perspectiveCamera.position, {
                    duration: 0.5,
                    y: this.zoom ? 0.5 : 0,
                    z: this.zoom ? 0.8 : 0.5,
                    onUpdate: () => {
                        this.actualRoom.getObjectByName('room').visible = this.zoom ? false : true
                        this.actualRoom.getObjectByName('stands').visible = this.zoom ? false : true
                        this.actualRoom.getObjectByName('car1').visible = this.zoom ? false : true
                        this.actualRoom.getObjectByName('car2').visible = this.zoom ? false : true
                        this.rellyCarAnimationTrigger = this.zoom ? false : true;
                    }
                })
                if (this.rellyCarAnimationTrigger) {
                    this.floor.visible = false
                    this.scene.fog = new THREE.Fog(0xc7c7c7, 0.5, 2);
                    this.rellyCarColorContainer.style.display = 'grid'
                    this.monsterTruckBtn.style.display = 'none'
                    this.sportCarBtn.style.display = 'none'
                } else {
                    this.scene.fog = new THREE.Fog(0xc7c7c7, 5, 10);
                    this.rellyCarColorContainer.style.display = 'none'
                    this.monsterTruckBtn.style.display = 'block'
                    this.sportCarBtn.style.display = 'block'
                }
                gsap.to(this.rellyCar.position, {
                    duration: 0.5,
                    x: this.zoom ? 4.3714752197265625 : 0.7,
                    y: this.zoom ? 1.4305287599563599 : 0,
                    z: this.zoom ? 0.34669309854507446 : 0
                })
            }
            //PAS 'ZOOM' AAN
            this.zoom = !this.zoom
        })
        //COLOR CHANGE BUTTONS
        //GET CAR METERIALS
        console.log(this.actualRoom)
        this.rellyCar = this.actualRoom.getObjectByName('car3')
        this.rellyCarMainColor = this.actualRoom.getObjectByName('Cylinder005_8')
        this.rellyCarStripeColor = this.actualRoom.getObjectByName('Cylinder005_9')

        //CHANGE CAR COLOR BUTTONS
        this.rellyCarColorOne = document.querySelector('.rellyCarColorOne')
        this.rellyCarColorOne.addEventListener('click', () => {
            this.rellyCarMainColor.material.color.setHex('0x3F0075')
            this.rellyCarStripeColor.material.color.setHex('0x6B00FF')

        })

        this.rellyCarColorTwo = document.querySelector('.rellyCarColorTwo')
        this.rellyCarColorTwo.addEventListener('click', () => {
            this.rellyCarMainColor.material.color.setHex('0x750002')
            this.rellyCarStripeColor.material.color.setHex('0xFF2000')

        })

        this.rellyCarColorThree = document.querySelector('.rellyCarColorThree')
        this.rellyCarColorThree.addEventListener('click', () => {
            this.rellyCarMainColor.material.color.setHex('0x003975')
            this.rellyCarStripeColor.material.color.setHex('0x007FFF')

        })

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

