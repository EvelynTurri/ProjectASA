const Observable = require("../../Utils/Observable");

class RollerShutter extends Observable {

    constructor(house, name, room) {
        super(house, name, room);
        this.house = house;
        this.name = name;
        this.room = room;
        //this.set('room', );
        this.set('status', 'down');
    }

    liftUp()  {
        this.status = 'up';
    }

    pullDown() {
        this.status = 'down';
    }
}

module.exports = RollerShutter