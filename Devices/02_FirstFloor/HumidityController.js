const Observable = require("../../Utils/Observable");

class HumidityController extends Observable {

    constructor(house, name) {
        super(house, name);
        this.house = house;
        this.name = name;

        this.set('status', 'on');
        this.set('humidity', 85);
    }

    swicthOn() {
        this.status = 'on';
        console.log('The Humidity Controller is switched on');
    }

    swicthOff() {
        this.status = 'off';
        console.log('The Humidity COntroller is switched off');
    }

    setHumidity(humidity) {
        if (this.status == 'on') {
            this.humidity = humidity;
            console.log('The humidity has set to ' + humidity);
        } else {
            console.log('Swicth on the humidity controller first');
        }
    }
}

module.exports = HumidityController