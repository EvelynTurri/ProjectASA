const Observable = require("../../Utils/Observable");

class WashingMachine extends Observable {
    
    constructor (house, name) {
        super(house, name);
        this.house = house; 
        this.name = name; 
        this.set('status', 'off');
        this.set('active', false);
        this.set('finished', false);
    }

    switchOn () {
        this.status = 'on'
        this.house.utilities.electricity.consumption += 100;
        // Include some messages logged on the console!
        console.log('Washing Machine is switched on')
    }

    switchOff () {
        this.status = 'off';
        this.house.utilities.electricity.consumption -= 100;
        console.log('Washing Machine is switched off')
    }

    start (l) {
        if (this.status == 'on' && !this.active) {
            this.active = true
            console.log('Washing Machine is working')
        } else {
            console.log('Switch on the Washing Machine first')
        }
    }

}

module.exports = WashingMachine