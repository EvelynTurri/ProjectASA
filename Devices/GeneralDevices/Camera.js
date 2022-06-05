const Observable = require("../../Utils/Observable");

class Camera extends Observable {
    constructor(house, name, room) {
        super(house, name, room);
        this.house = house,
        this.name = name;
        this.room = room;

        this.set('status', 'on');

    }

    switchOn() {
        this.status = 'on';
    }

    switchOff() {
        this.status = 'off';
    }

}

module.exports = Camera