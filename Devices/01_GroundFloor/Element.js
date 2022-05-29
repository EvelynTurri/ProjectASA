const Observable = require("../../Utils/Observable");

class Element extends Observable{

    constructor(house, name, bought_date, expire_date) {
        super(house, name, bought_date, expire_date);
        this.house = house
        this.name = name
        this.bought_date = bought_date
        this.expire_date = expire_date
    }

    
}

module.exports = Element