const Agent = require("../../bdi/Agent");
const Observable = require("../../Utils/Observable");

class ChargingBaseVacuumCleaner extends Agent {

    constructor(house, name, vacuumCleaner, floor) {
        super(house, name, vacuumCleaner, floor);
        this.house = house;
        this.name = name;
        this.vacuumCleaner = vacuumCleaner;
        this.floor = floor;

        this.set('status', 'off');
        this.set('charging', false);
    }

    switchOn() {
        if (this.status == 'off') {
            this.status = 'on';
            console.log('The charging base of the vaccum cleaner switches on');
        } else {
            console.log('The charging base of the vaccum cleaner is already switched on');
        }
    }

    switchOff() {
        if (this.status == 'on') {
            this.status = 'off';
            console.log('The charging base of the vaccum cleaner switches off');
        } else {
            console.log('The charging base of the vaccum cleaner is already switched off');
        }
    }

    recharge() {
        this.charging = true;
        console.log("Start to charge the vaccum cleaner")
    }
}

module.exports = ChargingBaseVacuumCleaner