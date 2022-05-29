const Observable = require("../utils/Observable");

class Utility extends Observable{

    constructor(house, name) {
        super(house, name);
        this.house = house;
        this.name = name;

        this.set('consumption', 0);
    }
}

module.exports = Utility