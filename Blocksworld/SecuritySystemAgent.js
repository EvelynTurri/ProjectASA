const pddlActionIntention = require('../pddl/Actions/pddlActionIntention')
const Agent = require('../bdi/Agent')
const Goal = require('../bdi/Goal')
const Intention = require('../bdi/Intention')
const PlanningGoal = require('../pddl/PlanningGoal')
const MessageDispatcher = require('../pddl/Actions/MessageDispatcher')

class Check extends pddlActionIntention{
    async checkPreconditionAndApplyEffect () {
        if ( this.checkPrecondition() ) {
            this.applyEffect()
            await new Promise(res=>setTimeout(res,0))
        }
        else
            throw new Error('pddl precondition not valid'); //Promise is rejected!
    }
}

class Activate extends Check {
    static parameters = ['obj'];
    static precondition = [ ['security_system', 'obj'], ['deactivate', 'obj']];
    static effect = [ ['activate', 'obj']];
    *exec ({obj}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            //this.agent.move(before, after);
            this.agent.beliefs.declare('activate' + ' ' + obj), this.agent.beliefs.undeclare('deactivate' + ' ' + obj);
         
        
    }
}

class Deactivate extends Check {
    static parameters = ['obj'];
    static precondition = [ ['security_system', 'obj'], ['activate', 'obj']];
    static effect = [ ['deactivate', 'obj']];
    *exec ({obj}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            //this.agent.move(before, after);
            this.agent.beliefs.declare('deactivate' + ' ' + obj), this.agent.beliefs.undeclare('activate' + ' ' + obj);
         
        
    }
}



module.exports = {Activate, Deactivate}