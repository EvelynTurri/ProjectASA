const Observable = require("../../Utils/Observable")
const Element = require('./Element')

class Fridge extends Observable {

    constructor(house, name) {
        super(house, name);
        this.house = house
        this.name = name

        this.set('status', 'on')
        this.set('memory', [])
        this.set('temperature', 8)
    }

    switchOn () {
        if (this.status == 'off') {
            this.status = 'on'
            console.log('The fridge is switched on')
        } else {
            console.log('The fridge was already switched on')
        } 
    }

    switchOff () {
        if (this.status == 'on') {
            this.status = 'off'
            console.log('The fridge is switched off')
        } else {
            console.log('The fridge was already switched off')
        } 
    }

    setTemperature(temperature) {
        if (this.status == 'on') {
            this.temperature = temperature
            console.log('The temperature of the fridge has set to ' + temperature)
        } else {
            console.log('Switch on the Fridge first')
        }
       
    }

    cleanMemory() {
        this.memory.forEach((index, array) => {
            delete array[index]
        })
    }

    addElement(e) {
        this.memory.push(e)
        console.log('Element' + e.name + 'has been added in the memory')
    }

    removeElement(e) {
        this.memory.pop(e)
        console.log('Element' + e.name + 'has been removed from the memory')
    }
}

module.exports = Fridge