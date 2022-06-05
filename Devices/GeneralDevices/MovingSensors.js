const Observable = require("../../Utils/Observable");
const Room = require("../../Room/Room")

class MovingSensors extends Observable {

    constructor(house, name, room) {
        super(house, name, room);
        this.house = house;
        this.name = name;
        this.room = room;

        this.set('active', true);
        this.set('perceive', false);
    }

    activate() {
        this.active = true;
        console.log("The Moving sensor in room " + this.room + " has been activated");
    }

    deactivate() {
        this.active = false;
        console.log("The Moving sensor in room " + this.room + " has been deactivated");
    }

    alert() {
        this.perceive = true;
        if (this.perceive) {
            console.log("ALERT!");
            console.log("There is someone moving in room " + this.room);
        }
    }
}

module.exports = MovingSensors