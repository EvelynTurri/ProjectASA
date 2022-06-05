const Goal = require("../bdi/Goal")
const Intention = require("../bdi/Intention")
const MovingSensors = require("../Devices/GeneralDevices/MovingSensors")

class MovingSensorsGoal extends Goal{

    constructor(sensors = []) {
        super(sensors);

        /** @type {Array<MovingSensors>} sensors */
        this.sensors = sensors;

    }
}

class MovingSensorsIntention extends Intention{

    constructor(agent, goal) {
        super(agent, goal);
        
        /** @type {Array<MovingSensors>} sensors */
        this.sensors = this.goal.sensors;
    }

    static applicable (goal) {
        return goal instanceof MovingSensorsGoal
    }

    *exec () {
        
        var sensorsGoals = []
        for (let s of this.sensors) {
            
            let sensorGoalPromise = new Promise( async res => {
                while (true) {
                    let status = await s.notifyChange('perceive')
                    if (status == true) {
                        this.log('sense: sensor ' + s.name + ' perceives ' + status)
                    }
                    this.agent.beliefs.declare(s.name)
                }
            });

            sensorsGoals.push(sensorGoalPromise)
        }
        yield Promise.all(sensorsGoals)
        
        
    }
}

module.exports = {MovingSensorsGoal, MovingSensorsIntention}