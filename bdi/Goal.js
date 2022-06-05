const Observable = require("../utils/Observable")

var nextId = 0

/**
 * @class Goal
 */
class Goal extends Observable{

    constructor (parameters = {}) {
        super({achieved: false})
        
        this.id = nextId++

        /** @type {*} parameters */
        this.parameters = parameters
    }

    toString() {
        return this.constructor.name + '#'+this.id + this.parameters.toString() //+ this.effect.map(e=>'('+e+')').join('')
    }
}



module.exports = Goal