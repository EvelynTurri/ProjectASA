const Observable = require("../Utils/Observable");
const Room = require('../Room/Room')

class Person extends Observable {


    constructor(house, name) {
        super(house, name);
        this.house = house;
        this.name = name;

        this.set('inRoom', );
    }

    moveTo(to) {
        if(this.inRoom.doorsTo.includes(to)) {
            console.log(this.name, '\t moved from', this.inRoom.name, ' to ', to.name);
            this.inRoom.people_inRoom -= 1;
            this.inRoom.devices.forEach(item => {
                if (item.name == `moving_sensor_${item.room.name}`) {
                    
                    if (this.inRoom.people_inRoom == 0) {
                        
                        item.perceive = false;
                    } 
                }
            })
            this.inRoom = to;
            this.inRoom.devices.forEach(item => {
                if (item.name == `moving_sensor_${item.room.name}`) {
                    if (this.inRoom.people_inRoom == 0) {
                        item.perceive = true;
                    }
                }
            })
            this.inRoom.people_inRoom += 1;

            return true;
        } else {
            console.log(this.name, '\t failed moving from', this.inRoom.name, 'to', to.name);
            return false;
        }

    }

}

module.exports = Person