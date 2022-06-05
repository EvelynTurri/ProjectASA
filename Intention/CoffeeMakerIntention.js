const Goal = require("../bdi/Goal")
const Intention = require("../bdi/Intention")
const CoffeeMaker = require('../Devices/01_GroundFloor/CoffeeMaker')
const Clock = require('../Utils/Clock')

class CoffeeMakerGoal extends Goal{

    constructor(coffeeMaker) {
        super(coffeeMaker);

        /** @type {CoffeeMaker} coffeemaker */
        this.coffeeMaker = coffeeMaker;

    }
}

class CoffeeMakerIntention extends Intention{

    constructor(agent, goal) {
        super(agent, goal);
        
        /** @type {Array<CoffeeMaker>} coffeeMkaer */
        this.coffeeMaker = this.goal.coffeeMaker;
    }

    static applicable (goal) {
        return goal instanceof CoffeeMakerGoal
    }

    *exec () {
        while(true) {
            Clock.global.notifyChange('mm');
            
            if (Clock.global.hh == 6 && Clock.global.mm == 0) {
                this.coffeeMaker.switchOn();
                this.coffeeMaker.start();
                this.agent.beliefs.declare('coffee_maker switch_on')
                this.log('sense: It\'s 6 a.m.! Coffee Maker switches on and starts to make coffee')
            }
            yield
            if (Clock.global.hh == 6 && Clock.global.mm == 15) {
                this.coffeeMaker.finish();
                this.coffeeMaker.switchOff();
                this.agent.beliefs.declare('coffee_maker switch_off')
                this.log('sense: The coffee is ready and the coffee maker switches off')
            }
            

        }
        
    }
}

module.exports = {CoffeeMakerGoal, CoffeeMakerIntention}