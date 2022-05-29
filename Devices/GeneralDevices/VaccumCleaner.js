const Agent = require("../../bdi/Agent");
const Observable = require("../../Utils/Observable");

class VaccumCleaner extends Agent {

    constructor(house, name, floor) {
        super(house, name, floor);
        this.house = house ;
        this.name = name;
        this.floor = floor;
        //this.charger_base = charger_base;

        this.status = 'off';
        this.cleaning = false;
        this.charging = false;
        this.battery = 100;
        this.status_battery = 'fully_charged';
        this.on_based = 'in_based';
        this.room = 'entrance';
        //this.set('status', 'off');
        //this.set('cleaning', false);
        //this.set('charging', false);
        //this.set('battery', 100);
        //this.set('status_battery', 'fully_charged');
        //this.set('on_based', true)
    }

    switchOn() {
        if (this.status == 'off') {
            this.status = 'on';
            console.log('The vaccum cleaner switches on');
        } 
    }

    switchOff() {
        if (this.status == 'on') {
            this.status = 'off'
            console.log('The vaccum cleaner switches off');
        } 
    }

    startClean() {
        if(this.status == 'on' && !this.cleaning && this.battery > 30 ) {
            this.cleaning = true;
            console.log('The Vaccum Cleaner is already cleaning')
        } else if(this.status == 'off') {
            console.log('Swicth on the vaccum cleaner first')
        } else if(this.cleaning) {
            console.log('The vaccum cleaner is already cleaning')
        } else {
            console.log('Recharge the vaccum cleaner first, because its battery is ' + this.battery)
        }
    }

    connectChargerBase(c) {
        this.charger_base = c
    }

    leaveChargerBase() {
        if (this.on_based == true && this.status_battery == 'fully_charged') {
            this.on_based = false;
            this.battery -= 10;
            this.log('The ', this.name, ' left the charger base')
        } else {

        }
    }

    returnChargerBase() {
        if (this.on_based == false) {
            this.on_based = true;
            this.battery += 10;
            this.log('The ', this.name, ' return to the charger base')
        } else {

        }
    }

    move(before, after) {
        this.status = 'move'
        console.log(this.name, ' moved from ', before, ' to ', after)
    }

    clean(room) {
        console.log(this.name, ' cleaned room ', room)
    }
}

module.exports = VaccumCleaner