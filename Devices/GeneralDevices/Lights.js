const Observable = require('../../Utils/Observable');

class Light extends Observable {

    constructor (house, name, room) {
        super(house, name, room);
        this.house = house;
        this.name = name;
        this.room = room;

        this.set('status', 'off');
        this.set('color', 'normal_light');
    }

    switchOnLight (l) {
        this.status = 'on';
        this.house.utilities.electricity.consumption += 20;
    }


    switchOffLight (l) {
        this.status = 'off';
        this.house.utilities.electricity.consumption -= 20;
    }

    setColor(color) {
        var old_color = this.color;
        if ((color != 'normal_light') && (color != 'warm_white') && (color != 'cold_white') && (color != 'red') && (color != 'blue') && (color != 'light_pink')) {
            console.log('The color input does not exist, please choose between : normal_light, warm_white, cold_white, red, blue or light_pink');
        } else {
            this.color = color;
            console.log('The color of the lights has changed from ' + old_color + ' to ' + this.color);
        }
    }

    eveningMode() {
        this.setColor('warm_white');
    }
}

module.exports = Light