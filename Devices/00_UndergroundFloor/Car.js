const Observable = require("../../Utils/Observable");

class Car extends Observable {
    
    constructor (house, name) {
        super(house, name);
        this.house = house; 
        this.name = name; 
        this.set('status', 'off') 
        this.set('car_in_garage', true)
        this.set('charging', false)
        this.set('status_battery', 'fully_charged')
        this.set('battery', 80)
    }

    switchOnCar (l) {
        this.status = 'on';
        this.house.utilities.electricity.consumption += 3700;
        console.log('Car turned on')
    }
    
    switchOffCar (l) {
        this.status = 'off';
        this.house.utilities.electricity.consumption -= 3700;
        console.log('Car turned off')
    }

    charge (l) {
        if (this.status == 'off' && this.car_in_garage && this.status!=100) {
            this.charging = true
        } else if(this.status == 'on') {
            console.log('Switch off the car before charging it')
        } else if(!this.garage){
            console.log('Bring the car in the garage')
        }

        while(this.battery!=100) {
            this.battery +=1
            this.set_status_battery()
        }

        console.log('The car is fully charged')
    }

    set_status_battery() {
        if (this.battery >= 95) {
            this.status_battery = 'fully_charge'
        } else if(this.battery >= 50) {
            this.status_battery = 'half_charged'
        } else {
            this.status_battery = 'need_recharged'
        }
    }

    ask_status_battery () {
        console.log('The battery is ' + this.status_battery)
    }

    
}

module.exports = Car