const Observable = require("../../Utils/Observable");

class AllarmSystem extends Observable {
    constructor(house, name, room) {
        super(house, name, room);
        this.house = house;
        this.name = name;
        this.room = room;

        this.set('active', true);
        this.set('alert', false);
    }

    activate() {
        this.active = true;
        console.log('The alarm system is active');
    }

    deactivate() {
        this.active = false;
        console.log('The alarm system has been deactivated');
    }

    alert() {
        this.alert = true;
        console.log('ALERT!');
        console.log("The alarm system went off")
    }
}

module.exports = AllarmSystem