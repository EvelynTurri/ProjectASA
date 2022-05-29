const Observable = require("../../Utils/Observable");

class CoffeeMaker extends Observable {

    constructor(house, name) {
        super(house, name);
        this.house = house;
        this.name = name;

        this.set('status', 'off');
        this.set('making_coffee', false);
        this.set('finished', true);
    }

    switchOn() {
        this.status = 'on'
    }

    switchOff() {
        this.status = 'off'
    }

    start() {
        if (this.status == 'on') {
            this.making_coffee = true
            this.finished = false
        } 
    }

    finish() {
        if (this.status == 'on') {
            this.making_coffee = false
            this.finished = true
        } 
    }

}

module.exports = CoffeeMaker