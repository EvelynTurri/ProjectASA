const Observable = require("../../Utils/Observable");

class SingleHob extends Observable{
    constructor(house, name, number) {
        super(house, name, number);
        this.house = house;
        this.name = name;
        this.number = number;
        this.set('status', 'off');
        this.set('level', 0);
    }

    switchOn () {
        this.status = 'on';
    }

    switchOff () {
        this.status = 'off';
    }

    setLevel (level) {
        this.level = level;
    } 
}

module.exports = SingleHob