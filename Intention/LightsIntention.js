const Goal = require("../bdi/Goal");
const Intention = require("../bdi/Intention");
const Light = require('../Devices/GeneralDevices/Lights');
const House = require("../Room/House");

class LightGoal extends Goal {
    constructor(house, room, light) {
        super(house, room, light);

        /** @type {House} house */
        this.house = house;
        /** @type {Room} room */
        this.room = room;
        /** @type {Light} light */
        this.light = light;
    }
}

class LightIntention extends Intention {
    constructor(agent, goal) {
        super(agent, goal);

        /** @type {House} house */
        this.house = this.goal.house;
        /** @type {Room} room */
        this.room = this.goal.room;
        /** @type {Light} light */
        this.light = this.goal.light;
    }

    static applicable (goal) {
        return goal instanceof LightGoal
    }

    *exec () {

        while (true) {
            var status;
            this.room.devices.forEach(item => {
                if(item.name == `moving_sensor_${item.room.name}`) {
                    status = item.perceive;
                    //this.log('siamo nella stanza : ', item.room.name);
                }
            })
            yield
            if (status == true) {
                if (this.light.status == 'off') {
                    if (this.room.people_inRoom == 1) {
                        this.light.switchOnLight();
                        this.log('sense: light ' + this.light.name + ' switched on');
                    }
                }
                
            } else {
                if (this.light.status == 'on') {
                    if (this.room.people_inRoom == 0) {
                        this.light.switchOffLight();
                        this.log('sense: light ' + this.light.name + ' switched off');
                    }
                }
            }
            
            
        }
        
    }
}

module.exports = {LightGoal, LightIntention}