const Goal = require("../bdi/Goal")
const Intention = require("../bdi/Intention")
const RollerShutter = require("../Devices/GeneralDevices/RollerShutter");
const Clock = require("../Utils/Clock");

class RollerShutterGoal extends Goal {

    constructor(rollerShutter) {
        super(rollerShutter);
        
        /** @type {RollerShutter} rollershutter */
        this.rollerShutter = rollerShutter;
    }
}

class AllRollerShutterIntention extends Intention {

    constructor(agent, goal){
        super(agent, goal);
        /** @type {RollerShutter} rollershutter */
        this.rollerShutter = this.goal.rollerShutter;

    }

    static applicable (goal) {
        return goal instanceof RollerShutterGoal
    }

    *exec () {
        
        while(true) {
            Clock.global.notifyChange('mm')
            if (Clock.global.hh == 6 && Clock.global.mm == 0) {
                this.rollerShutter.liftUp(); 
                this.log('sense: It\'s 6 a.m.! Roller shutter are up');  
            }
            yield
            if (Clock.global.hh == 20 && Clock.global.mm == 0) {
                this.rollerShutter.pullDown();
                this.log('sense: It\s 9 p.m.! Roller shutter are down');
            }
        
        }

    }
}

module.exports = {RollerShutterGoal, AllRollerShutterIntention}