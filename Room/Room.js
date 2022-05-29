const MovingSensors = require("../Devices/GeneralDevices/MovingSensors");
const Camera = require("../Devices/GeneralDevices/Camera");
const Observable = require("../Utils/Observable");

class Room extends Observable {

    constructor(house, name, floor) {
        super(house, name, floor);
        this.house = house;
        this.name = name;
        this.floor = floor;

        this.set('doorsTo', []);
        this.set('devices', []);
        this.set('people_inRoom', 0);

        this.createMovingSensorsSystem();
        this.createCamerasSystem();
    }

    createMovingSensorsSystem() {
        var movingSystem = new MovingSensors(this.house, `moving_sensor_${this.name}`, this);
        this.devices.push(movingSystem);
    }

    createCamerasSystem() {
        var camera = new Camera(this.house, `camera_system_${this.name}`, this)
        this.devices.push(camera);
    }

    addDoor(to) {
        this.doorsTo.push(to);
    }

}

module.exports = Room