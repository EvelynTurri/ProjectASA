const Observable = require("../../Utils/Observable");

class Dishwasher extends Observable {

    constructor(house, name) {
        super(house, name);
        this.house = house
        this.name = name

        this.set('status', 'off')
        this.set('running', false)
        this.set('finished', true)
    }

    switchOn() {
        this.status = 'on'
        console.log('The Dishewasher switches on')
    }

    switchOff() {
        this.status = 'off'
        console.log('The Dishwasher switches off')
    }

    start() {
        if (this.status == 'on') {
            this.running = true
            this.finished = false
            console.log('The Dishwasher is running')
        } else {
            console.log('Switch on the Dishwasher first')
        }
    }

}

module.exports = Dishwasher