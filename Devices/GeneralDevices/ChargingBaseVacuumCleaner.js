const Agent = require("../../bdi/Agent");
const Observable = require("../../Utils/Observable");

class ChargingBaseVacuumCleaner extends Agent {

    constructor(house, name, floor) {
        super(house, name, floor);
        this.house = house;
        this.name = name;
        this.floor = floor;

        this.status = 'on';
        this.vaccum = 'in_base';
    }

    switchOn() {
        this.status = 'on';
    }

    switchOff() {
        this.status = 'off';
    }
    sendVaccum() {
        this.vaccum = 'out_base';
    }

    receiveVaccum() {
        this.vaccum = 'in_base';
    }
   
}

module.exports = ChargingBaseVacuumCleaner