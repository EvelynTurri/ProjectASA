const pddlActionIntention = require('../pddl/Actions/pddlActionIntention')
const Agent = require('../bdi/Agent')
const Goal = require('../bdi/Goal')
const Intention = require('../bdi/Intention')
const PlanningGoal = require('../pddl/PlanningGoal')

class Check extends pddlActionIntention{
    async checkPreconditionAndApplyEffect () {
        if ( this.checkPrecondition() ) {
            this.applyEffect()
            await new Promise(res=>setTimeout(res,1000))
        }
        else
            throw new Error('pddl precondition not valid'); //Promise is rejected!
    }
}

class Move extends Check {
    static parameters = ['obj','before','after'];
    static precondition = [ ['vaccum', 'obj'], ['room', 'before'], ['room', 'after'], ['adj', 'before', 'after'], ['in_room', 'obj', 'before'], ['adj', 'after', 'before'], ['clean', 'obj', 'before'], ['switched_on', 'obj'], ['not_in_base', 'obj']];
    static effect = [ ['in_room', 'obj', 'after'], ['not in_room', 'obj', 'before']];
    *exec ({obj, before, after, status}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            this.agent.move(before, after);
            this.agent.beliefs.declare('in_room' + ' ' + obj + ' ' + after), this.agent.beliefs.undeclare('in_room' + ' ' + obj + ' ' + before);
         
        
    }
}

class Switch extends Check {
    static parameters = ['obj', 'status'];
    static precondition = [ ['vaccum', 'obj'], ['state', 'status'] ];
    static effect = [ ['set_status', 'obj', 'status'] ];
    *exec ({obj, status}=parameters) {
        if (status == 'on') {
            yield this.checkPreconditionAndApplyEffect()
            this.agent.switchOn(obj);
            this.agent.beliefs.declare('set_status' + ' ' + obj + ' ' + status), this.agent.beliefs.undeclare('set_status' + ' ' + obj + ' ' + 'on');
        }
        else {
            yield this.checkPreconditionAndApplyEffect()
            this.agent.switchOff(obj);
            this.agent.beliefs.declare('set_status' + ' ' + obj + ' ' + status), this.agent.beliefs.undeclare('set_status' + ' ' + obj + ' ' + 'off');
        }
    }
}

class SwitchOn extends Check {
    static parameters = ['obj'];
    static precondition = [ ['vaccum', 'obj'], ['switched_off', 'obj']];
    static effect = [ ['switched_on', 'obj'] ];
    *exec ({obj}=parameters) {
            yield this.checkPreconditionAndApplyEffect()
            this.agent.switchOn(obj);
            this.agent.beliefs.declare('switched_on' + ' ' + obj), this.agent.beliefs.undeclare('switched_off' + ' ' + obj);
    }
}

class Clean extends Check {
    static parameters = ['obj', 'r'];
    static precondition = [ ['vaccum', 'obj'], ['room', 'r'], ['in_room', 'obj', 'r'], ['switched_on', 'obj'], ['not_in_base', 'obj']];
    static effect = [ ['clean', 'obj', 'r'] ];
    *exec ({obj, r}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            this.agent.clean(r);
            this.agent.beliefs.declare('clean' + ' ' + obj + ' ' + r);
        
    }
}

class LeaveChargerBase extends Check {
    static parameters = ['obj'];
    static precondition = [ ['vaccum', 'obj'], ['switched_on', 'obj'], ['in_base', 'obj']];
    static effect = [ ['not_in_base', 'obj'] ];
    *exec ({obj}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            this.agent.leaveChargerBase();
            this.agent.beliefs.declare('not_in_base' + ' ' + obj);
            this.agent.beliefs.undeclare('in_base' + ' ' + obj)
        
    }
}

class CleanAllRoomsUnderground extends Check {
    static parameters = ['obj', 'r1', 'r2', 'r3', 'r4', 'r5'];
    static precondition = [ ['vaccum', 'obj'], ['room1', 'r1'], ['room2', 'r2'], ['room3', 'r3'], ['room4', 'r4'], ['room5', 'r5'], ['clean', 'obj', 'r1'], ['clean', 'obj', 'r2'], ['clean', 'obj', 'r3'], ['clean', 'obj', 'r4'], ['clean', 'obj', 'r5']];
    static effect = [ ['clean_underground_floor', 'obj'] ];
    *exec ({obj}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            this.agent.beliefs.declare('clean_underground_floor' + ' ' + obj);
        
    }
}

class CleanAllRoomsGround extends Check {
    static parameters = ['obj', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6'];
    static precondition = [ ['vaccum', 'obj'], ['room1', 'r1'], ['room2', 'r2'], ['room3', 'r3'], ['room4', 'r4'], ['room5', 'r5'], ['room6', 'r6'], ['clean', 'obj', 'r1'], ['clean', 'obj', 'r2'], ['clean', 'obj', 'r3'], ['clean', 'obj', 'r4'], ['clean', 'obj', 'r5'], ['clean', 'obj', 'r6']];
    static effect = [ ['clean_ground_floor', 'obj'] ];
    *exec ({obj}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            this.agent.beliefs.declare('clean_ground_floor' + ' ' + obj);
        
    }
}

class CleanAllRoomsFirstFloor extends Check {
    static parameters = ['obj', 'r1', 'r2', 'r3', 'r4', 'r5', 'r6', 'r7', 'r8'];
    static precondition = [ ['vaccum', 'obj'], ['room1', 'r1'], ['room2', 'r2'], ['room3', 'r3'], ['room4', 'r4'], ['room5', 'r5'], ['room6', 'r6'], ['room7', 'r7'], ['room8', 'r8'], ['clean', 'obj', 'r1'], ['clean', 'obj', 'r2'], ['clean', 'obj', 'r3'], ['clean', 'obj', 'r4'], ['clean', 'obj', 'r5'], ['clean', 'obj', 'r6'], ['clean', 'obj', 'r7'], ['clean', 'obj', 'r8']];
    static effect = [ ['clean_first_floor', 'obj'] ];
    *exec ({obj}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            this.agent.beliefs.declare('clean_first_floor' + ' ' + obj);
        
    }
}

class ReturnChargerBase extends Check {
    static parameters = ['obj'];
    static precondition = [ ['vaccum', 'obj'], ['not_in_base', 'obj']];
    static effect = [ ['in_base', 'obj'] ];
    *exec ({obj}=parameters) {
        yield this.checkPreconditionAndApplyEffect()
            this.agent.returnChargerBase();
            this.agent.beliefs.declare('in_base' + ' ' + obj);
            this.agent.beliefs.undeclare('not_in_base' + ' ' + obj)
        
    }
}

class SwitchOff extends Check {
    static parameters = ['obj'];
    static precondition = [ ['vaccum', 'obj'], ['clean_all_rooms_first', 'obj']];
    static effect = [ ['switched_off', 'obj'] ];
    *exec ({obj}=parameters) {
            yield this.checkPreconditionAndApplyEffect()
            this.agent.switchOff(obj);
            this.agent.beliefs.declare('switched_off' + ' ' + obj), this.agent.beliefs.undeclare('switched_on' + ' ' + obj);
    }
}


class CleanFloor extends Check {
    static parameters = ['obj'];
    static precondition = [ ['vaccum', 'obj'], ['switched_off', 'obj']];
    static effect = [ ['clean_first_floor', 'obj'] ];
    *exec ({obj}=parameters) {
            yield this.checkPreconditionAndApplyEffect()
            this.agent.switchOff(obj);
            this.agent.beliefs.declare('clean_first_floor' + ' ' + obj);
    }
}
class RetryGoal_vc extends Goal {}

class RetryFourTimesIntention_vc extends Intention {
    static applicable (goal) {
        return goal instanceof RetryGoal_vc
    }
    *exec ({goal}=parameters) {
        for(let i=0; i<4; i++) {
            let goalAchieved = yield this.agent.postSubGoal( goal )
            if (goalAchieved)
                return;
            this.log('wait for something to change on beliefset before retrying for the ' + (i+2) + 'th time goal', goal.toString())
            yield this.agent.beliefs.notifyAnyChange()
        }
    }
}


module.exports = {Move, Switch, Clean, SwitchOn, LeaveChargerBase, CleanAllRoomsUnderground, CleanAllRoomsGround, CleanAllRoomsFirstFloor, ReturnChargerBase, SwitchOff, CleanFloor, RetryGoal_vc, RetryFourTimesIntention_vc}