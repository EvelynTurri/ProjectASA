const Observable = require("../../Utils/Observable");
const SingleHob = require('./SingleHob');

class InductionHob extends Observable {
    
    constructor (house, name) {
        super(house, name);
        this.house = house; 
        this.name = name; 
        var hobs = [];
        
        for (let i = 0; i < 4; i++) {
            hobs[i] = new SingleHob(this.house, "Hob_" + i, i+1);
        }

        this.set('status', 'off');
        this.set('full_heating', false);
        this.set('heating', []);
    }

    switchOn () {
        this.status = 'on'
        for (let i = 0; i < 4; i++) {
            this.hobs[i].status = 'on';
        }
        console.log('The Induction Hob switches on');
    }

    switchOff (l) {
        this.status = 'off';
        console.log('The Induction Hob switches off');
    }

    setHeatings() {
        let s = ''
        for (let i = 0; i < 4; i++) {
            if (this.hobs[i].status == 'on') {
                this.heating.push(this.hobs[i])
                s = s + this.hobs[i].number  + ' ' 
            }
        }
        console.log('The hobs number : ' + s + 'are heating');
    }

    start (number_hob, level) {
        if (this.hobs[number_hob-1].status == 'on') {
            this.hobs[number_hob-1].setLevel(level);
        } else {
            console.log('Swicth on the hobs first');
        }
        
    }

    checkFullHeatings() {
        let i = 0
        while ((i<4) && (this.hobs[i].status == 'on')) {
            i++;
        }

        if(i == 4) {
            this.full_heating = true;
        } else {
            this.full_heating = false;
        }
        
    }
}

module.exports = InductionHob