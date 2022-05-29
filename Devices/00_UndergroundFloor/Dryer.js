const Observable = require("../../Utils/Observable");

class Dryer extends Observable {
    
    constructor (house, name) {
        super(house, name);
        this.house = house; 
        this.name = name; 
        this.set('status', 'off');
        this.set('active', false);
        this.set('finished', false);
    }

    switchOn (l) {
        this.status = 'on';
        this.house.utilities.electricity.consumption += 100;
        console.log('Dryer is switched on')
    }

    switchOff (l) {
        this.status = 'off';
        this.house.utilities.electricity.consumption -= 100;
        console.log('Dryer is switched off');
    }

    start (l) {
        if (this.status == 'on' && !this.active) {
            this.active = true;
            console.log('Dryer is working');
        } else {
            console.log('Switch on the dryer first');
        }
    }

}

module.exports = Dryer