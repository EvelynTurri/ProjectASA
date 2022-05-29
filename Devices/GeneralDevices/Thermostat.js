const Observable = require("../../Utils/Observable");

class Thermostat extends Observable {

    constructor(house, name, room) {
        super(house, name, room);
        this.house = house;
        this.name = name;
        this.room = room;

        this.set('status', 'on');
        this.set('temperature', 20);
    }

    switchOn() {
        this.status = 'on';
        console.log("The thermostat has been switched on");
    }

    switchOff() {
        this.status = 'off';
        console.log("The thermostat has been switched off");
    }

    readTemperature() {
        console.log('The temperature of the room ' + this.room + ' is ' + this.temperature);
        return this.temperature;
    }

    setTemperature(temperature) {
        let t = this.temperature;
        this.temperature = temperature;
        console.log('The temperature has passed from ' + t + ' to ' + this.temperature);
    }
}

module.exports = Thermostat