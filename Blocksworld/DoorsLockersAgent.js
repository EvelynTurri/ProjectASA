const pddlActionIntention = require('../pddl/Actions/pddlActionIntention')
const Agent = require('../bdi/Agent')
const Goal = require('../bdi/Goal')
const Intention = require('../bdi/Intention')
const PlanningGoal = require('../pddl/PlanningGoal')
const Observable = require('../Utils/Observable')
const {MessageDispatcher, Postman, PostmanAcceptAllRequest} = require('../pddl/Actions/MessageDispatcher')
//const MessageDispatcher = require('../pddl/Actions/MessageDispatcher')

class Check extends pddlActionIntention{
    async checkPreconditionAndApplyEffect () {
        if ( this.checkPrecondition() ) {
            this.applyEffect()
            await new Promise(res=>setTimeout(res, 0))
        }
        else
            throw new Error('pddl precondition not valid'); //Promise is rejected!
    }
}

class LockDoors extends Check {
    static parameters = ['obj'];
    static precondition = [ ['door_locker', 'obj'], ['deactivate', 'obj'], ['lock_check_status', 'obj']];
    static effect = [ ['activate', 'obj']];
    *exec ({obj, status}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
        this.agent.lock()
            //this.agent.move(before, after);
            this.agent.beliefs.declare('activate' + ' ' + obj), this.agent.beliefs.undeclare('deactivate' + ' ' + obj);
         
        
    }
}

class UnlockDoors extends Check {
    static parameters = ['obj'];
    static precondition = [ ['door_locker', 'obj'],['activate', 'obj'], ['unlock_check_status', 'obj']];
    static effect = [ ['deactivate', 'obj']];
    *exec ({obj, status}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
        this.agent.unlock()
            //this.agent.move(before, after);
            this.agent.beliefs.declare('deactivate' + ' ' + obj), this.agent.beliefs.undeclare('activate' + ' ' + obj);
         
        
    }
}

class UnlockCheckStatus extends Check {
    static parameters = ['obj', 'system'];
    static precondition = [ ['door_locker', 'obj'], ['security_system', 'system'],['activate', 'obj']];
    static effect = [ ['unlock_check_status', 'obj']];
    *exec ({obj, system}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
        MessageDispatcher.authenticate(this.agent).sendTo('allarm_system', new PlanningGoal( { goal: ['deactivate house_security_system'] } ) )
        this.agent.beliefs.declare('unlock_check_status' + ' ' + obj), this.agent.beliefs.undeclare('lock_check_status' + ' ' + obj);
         
        
    }
}

class LockCheckStatus extends Check {
    static parameters = ['obj', 'system'];
    static precondition = [ ['door_locker', 'obj'], ['security_system', 'system'],['deactivate', 'obj']];
    static effect = [ ['lock_check_status', 'obj']];
    *exec ({obj, system}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
        yield
        let lockMessageDispatcher = MessageDispatcher.authenticate(this.agent)
        lockMessageDispatcher.sendTo('allarm_system', new PlanningGoal( { goal: ['activate house_security_system'] } ) )
        this.agent.beliefs.declare('lock_check_status' + ' ' + obj), this.agent.beliefs.undeclare('unlock_check_status' + ' ' + obj);
            //this.agent.move(before, after);
            //this.agent.beliefs.declare('deactivate' + ' ' + obj), this.agent.beliefs.undeclare('activate' + ' ' + obj);
         
        
    }
}

/*
class MessageDispatcher extends Observable {
    
    static #dispatchers = {}
    static authenticate (senderAgent) {
        if (!(senderAgent.name in this.#dispatchers))
            this.#dispatchers[senderAgent.name] = new MessageDispatcher(senderAgent.name)
            
        return this.#dispatchers[senderAgent.name]
    }

    constructor (name) {
        super({newMessageReceived: false})
        this.name = name
        this.received = []
        //this.#dispatcher = []
    }
    
    pushMessage (goal) {
        this.newMessageReceived = true
        this.received.push(goal)
    }
    
    readMessage () {
        this.newMessageReceived = false
        return this.received.pop()
    }
    
    async sendTo (to, goal) {
        if (!(to in this.constructor.#dispatchers))
            this.constructor.#dispatchers[to] = new MessageDispatcher(to)
            //console.log()
        this.constructor.#dispatchers[to].pushMessage(goal)
        return goal.notifyChange('achieved')
    }

}

class Postman extends Goal {
}

class PostmanAcceptAllRequest extends Intention {
    static applicable (goal) {
        return goal instanceof Postman
    }
    *exec (parameters) {
        var myMessageDispatcher = MessageDispatcher.authenticate(this.agent)
        while (true) {
            yield myMessageDispatcher.notifyChange('newMessageReceived')
            let newMessage = myMessageDispatcher.readMessage()
            if (newMessage && newMessage instanceof Goal) {
                this.log('Reading received message', newMessage.toString())
                // console.log(newMessage)
                yield this.agent.postSubGoal(newMessage)
            }
        }
    }
}
*/



module.exports = {LockDoors, UnlockDoors, LockCheckStatus, UnlockCheckStatus}