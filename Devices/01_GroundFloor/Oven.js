const Observable = require("../../Utils/Observable");

class Oven extends Observable {
    
    constructor (house, name) {
        super(house, name);
        this.house = house; 
        this.name = name; 

        this.set('status', 'off');
        this.set('temperature', 0);
        this.set('full', false);
    }

    switchOn (l) {
        this.status = 'on';
        console.log('The Oven switches on');
    }

    switchOff (l) {
        this.status = 'off';
        console.log('The Oven switches off');
    }

    setTemperature(temperature) {
        this.temperature = temperature;
        console.log('The temperature of the oven is ' + temperature);
    }

    alertTemperature(temperature) {
        if (this.temperature = temperature) {
            console.log('The Oven just reached temperature ' + temperature);
        }
    }

    changingTemperature(temperature) {
        while (this.temperature != temperature) {
            this.temperature +=1;
        }

        this.alertTemperature(temperature);
    }
}

module.exports = Oven