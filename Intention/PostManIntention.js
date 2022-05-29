const Goal = require("../bdi/Goal")
const Intention = require("../bdi/Intention")
const MessageDispatcher = require("../pddl/Actions/MessageDispatcher")


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

module.exports = {Postman, PostmanAcceptAllRequest}