const Observable = require('../Utils/Observable')

class Floor extends Observable {

    constructor(house, name) {
        super(house, name);
        this.house = house;
        this.name = name;

        this.set('roomsFloor', []);
    }

    addRooms(rooms) {
        rooms.forEach(item => this.roomsFloor.push(item));
    }
}

module.exports = Floor