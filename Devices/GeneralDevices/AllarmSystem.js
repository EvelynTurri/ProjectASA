const Observable = require("../../Utils/Observable");
const Agent = require("../../bdi/Agent")

class AllarmSystem extends Agent {
    constructor(house, name) {
        super(house, name);
        this.house = house;
        this.name = name;

        this.active = true;
        this.alert = false;
    }

    activate() {
        this.active = true;
        console.log('The alarm system has been activated');
    }

    deactivate() {
        this.active = false;
        console.log('The alarm system has been deactivated');
    }

    alert() {
        this.alert = true;
        console.log('ALERT!');
        console.log("The alarm system went off")
    }
}

module.exports = AllarmSystem