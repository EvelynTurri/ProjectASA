const pddlActionIntention = require('../pddl/Actions/pddlActionIntention')
const Agent = require('../bdi/Agent')
const Goal = require('../bdi/Goal')
const Intention = require('../bdi/Intention')
const PlanningGoal = require('../pddl/PlanningGoal')
const Observable = require('../Utils/Observable')
const {MessageDispatcher, Postman, PostmanAcceptAllRequest} = require('../pddl/Actions/MessageDispatcher')

class Check extends pddlActionIntention{
    async checkPreconditionAndApplyEffect () {
        if ( this.checkPrecondition() ) {
            this.applyEffect()
            await new Promise(res=>setTimeout(res,10))
        }
        else
            throw new Error('pddl precondition not valid'); //Promise is rejected!
    }
}


class inChargerBase extends Check {
    static parameters = ['obj', 'v'];
    static precondition = [ ['charger_base', 'obj'], ['vaccum', 'v'], ['out', 'v', 'obj']];
    static effect = [ ['in', 'v', 'obj']];
    *exec ({obj, v}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            this.agent.receiveVaccum();
            this.agent.beliefs.declare('in' + ' ' + v + ' ' + obj), this.agent.beliefs.undeclare('out' + ' ' + v + ' ' + obj); 
            MessageDispatcher.authenticate(this.agent).sendTo(v, new PlanningGoal({goal: [`switched_off ${v}`]}))
    }

}

class outChargerBase extends Check {
    static parameters = ['obj', 'v'];
    static precondition = [ ['charger_base', 'obj'], ['vaccum', 'v'], ['in', 'v', 'obj']];
    static effect = [ ['out', 'v', 'obj']];
    *exec ({obj, v}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            this.agent.sendVaccum();
            this.agent.beliefs.declare('out' + ' ' + v + ' ' + obj), this.agent.beliefs.undeclare('in' + ' ' + v + ' ' + obj); 
    }

}

module.exports = {inChargerBase, outChargerBase}