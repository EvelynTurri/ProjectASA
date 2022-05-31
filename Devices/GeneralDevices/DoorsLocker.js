const Observable = require("../../Utils/Observable");
const Agent = require("../../bdi/Agent")

class DoorsLocker extends Agent {
    constructor(house, name) {
        super(house, name);
        this.house = house;
        this.name = name;

        this.status = 'deactive';
        this.alert = false;
    }

    lock() {
        this.status = 'active';
        console.log('The doors are locked');
    }

    unlock() {
        this.status = 'deactive';
        console.log('The doors are unlocked');
    }

    
}

module.exports = DoorsLocker