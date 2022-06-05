const Agent = require('../bdi/Agent')
const House = require('../Room/House')
const Room = require('../Room/Room')
const Clock = require('../Utils/Clock')
const {MovingSensorsGoal, MovingSensorsIntention} = require('../Intention/MovingSensorIntention')
const {CoffeeMakerGoal, CoffeeMakerIntention} = require('../Intention/CoffeeMakerIntention')
const {RollerShutterGoal, AllRollerShutterIntention} = require('../Intention/RollerShutterIntention')
const {LightGoal, LightIntention} = require('../Intention/LightsIntention')
var PlanningGoal = require("../pddl/PlanningGoal")
const {Move, Switch, Clean, SwitchOn, LeaveChargerBase, CleanAllRoomsUnderground, CleanAllRoomsGround, CleanAllRoomsFirstFloor,  ReturnChargerBase, SwitchOff, CleanUndergroundFloor, CleanGroundFloor, CleanFirstFloor} = require("../Blocksworld/PlanningVaccumCleanerAgents")
const {Activate, Deactivate} = require("../Blocksworld/SecuritySystemAgent")
const {LockDoors, UnlockDoors, LockCheckStatus, UnlockCheckStatus} = require("../Blocksworld/DoorsLockersAgent")
const {RetryGoal_vc, RetryFourTimesIntention_vc} = require('../Blocksworld/RetryGoal')
const {inChargerBase, outChargerBase} = require('../Blocksworld/ChargerBaseAgent')
const {MessageDispatcher, Postman, PostmanAcceptAllRequest} = require("../pddl/Actions/MessageDispatcher")

//AGENT
var house = new House();
var houseAgent = new Agent("house_agent");

//HOUSE AGENT
houseAgent.intentions.push(MovingSensorsIntention);
var AllMovingSensors = [];
house.rooms.garage.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.hallwayUnderground.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.billiardRoom.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.laundry.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.boilerRoom.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.landingUnderground.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.kitchen.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.pantry.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.livingRoom.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.groundBathroom.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.entryway.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.landingGround.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.masterBedroom.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.masterBathroom.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.childrenBedroom.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.childrenBathroom.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.hallwayFirstFloor.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.landingFirstFloor.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

house.rooms.greenhouse.devices.forEach(item => {
    if (item.name == `moving_sensor_${item.room.name}`) {
        AllMovingSensors.push(item);
    }
})

houseAgent.postSubGoal(new MovingSensorsGoal(AllMovingSensors));

houseAgent.intentions.push(AllRollerShutterIntention);
houseAgent.postSubGoal(new RollerShutterGoal(house.devices.rollerShutterKitchen));

houseAgent.intentions.push(LightIntention);
houseAgent.postSubGoal(new LightGoal(house, house.rooms.garage, house.devices.lightGarage));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.billiardRoom, house.devices.lightBilliardRoom));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.laundry, house.devices.lightLaundry));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.boilerRoom, house.devices.lightBoiler));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.hallwayUnderground, house.devices.lightHallwayUnderground));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.landingUnderground, house.devices.lightLandingUnderground));

houseAgent.postSubGoal(new LightGoal(house, house.rooms.kitchen, house.devices.lightKitchen));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.livingRoom, house.devices.lightLivingRoom));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.pantry, house.devices.lightPantry));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.groundBathroom, house.devices.lightGroundBathroom));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.entryway, house.devices.lightEntryway));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.landingGround, house.devices.lightLandingGround));

houseAgent.postSubGoal(new LightGoal(house, house.rooms.masterBedroom, house.devices.lightMasterBedroom));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.masterBathroom, house.devices.lightMasterBathroom));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.childrenBedroom, house.devices.lightChildrenBedroom));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.childrenBathroom, house.devices.lightChildrenBathroom));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.wardrobe, house.devices.lightWardrobe));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.greenhouse, house.devices.lightGreenhouse));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.hallwayFirstFloor, house.devices.lightHallwayFirstFloor));
houseAgent.postSubGoal(new LightGoal(house, house.rooms.landingFirstFloor, house.devices.lightLandingFirstFloor));


//COFFEE MAKER
var coffeeMakerAgent = new Agent("coffee_maker_agent");
coffeeMakerAgent.intentions.push(CoffeeMakerIntention);
coffeeMakerAgent.postSubGoal(new CoffeeMakerGoal(house.devices.coffeMaker));

Clock.global.observe('mm', (mm) => {
    var time = Clock.global
    if (time.dd == 0 && time.hh == 0 && time.mm == 15) {
        console.log('\n');
        console.log("- START OF THE SCENARIO -", '\n');
    }
    if(time.hh==6 && time.mm==15) {
        console.log('\n',"Mark moves from the master bedroom to the kitchen");
        house.people.Mark.moveTo(house.rooms.hallwayFirstFloor);
        house.people.Mark.moveTo(house.rooms.landingFirstFloor);
        house.people.Mark.moveTo(house.rooms.landingGround);
        house.people.Mark.moveTo(house.rooms.entryway);
        house.people.Mark.moveTo(house.rooms.kitchen);
    }
    if(time.hh==6 && time.mm==45) {
        console.log('\n',"Rose moves from the master bedroom to the kitchen");
        house.people.Rose.moveTo(house.rooms.hallwayFirstFloor);
        house.people.Rose.moveTo(house.rooms.landingFirstFloor);
        house.people.Rose.moveTo(house.rooms.landingGround);
        house.people.Rose.moveTo(house.rooms.entryway);
        house.people.Rose.moveTo(house.rooms.kitchen);
    }
    if (time.hh == 7 && time.mm == 0) {
        console.log('\n',"Mark moves from the kitchen to the garage");
        house.people.Mark.moveTo(house.rooms.entryway);
        house.people.Mark.moveTo(house.rooms.landingGround);
        house.people.Mark.moveTo(house.rooms.landingUnderground);
        house.people.Mark.moveTo(house.rooms.hallwayUnderground);
        house.people.Mark.moveTo(house.rooms.garage);
        console.log("Mark leaves the house");       
    }
    if (time.hh == 8 && time.mm == 0) {
        console.log('\n',"Rose moves from the kitchen to the garage");
        house.people.Rose.moveTo(house.rooms.entryway);
        house.people.Rose.moveTo(house.rooms.landingGround);
        house.people.Rose.moveTo(house.rooms.landingUnderground);
        house.people.Rose.moveTo(house.rooms.hallwayUnderground);
        house.people.Rose.moveTo(house.rooms.garage);  
        console.log("Rose leaves the house"); 
        
            
    }
    if(time.hh==14 && time.mm==0) {
        console.log('\n',"Rose has come back at home");
        console.log("Rose moves from the garage to the kitchen");
        house.people.Rose.moveTo(house.rooms.hallwayUnderground);
        house.people.Rose.moveTo(house.rooms.landingUnderground);
        house.people.Rose.moveTo(house.rooms.landingGround);
        house.people.Rose.moveTo(house.rooms.entryway);
        house.people.Rose.moveTo(house.rooms.kitchen);   
    }
    if(time.hh==16 && time.mm==0) {
        console.log('\n', "Rose moves from the kitchen to the garage");
        house.people.Rose.moveTo(house.rooms.entryway);
        house.people.Rose.moveTo(house.rooms.landingGround);
        house.people.Rose.moveTo(house.rooms.landingUnderground);
        house.people.Rose.moveTo(house.rooms.hallwayUnderground);
        house.people.Rose.moveTo(house.rooms.garage);  
        console.log("Rose leaves the house");
    }
    if(time.hh==17 && time.mm==0) {
        console.log('\n',"Mark has come back at home");
        console.log("Mark moves from the garage to the living room");
        house.people.Mark.moveTo(house.rooms.hallwayUnderground);
        house.people.Mark.moveTo(house.rooms.landingUnderground);
        house.people.Mark.moveTo(house.rooms.landingGround);
        house.people.Mark.moveTo(house.rooms.entryway);
        house.people.Mark.moveTo(house.rooms.livingRoom);
    }
    if(time.hh==18 && time.mm==0) {
        console.log('\n',"Rose has come back at home");
        console.log("Rose moves from the garage to the living room");
        house.people.Rose.moveTo(house.rooms.hallwayUnderground);
        house.people.Rose.moveTo(house.rooms.landingUnderground);
        house.people.Rose.moveTo(house.rooms.landingGround);
        house.people.Rose.moveTo(house.rooms.entryway);
        house.people.Rose.moveTo(house.rooms.livingRoom);
    }
    if(time.hh==19 && time.mm==0){
        console.log('\n',"Mark and Rose go in the kitchen")
        house.people.Mark.moveTo(house.rooms.kitchen);
        house.people.Rose.moveTo(house.rooms.kitchen);
        house.devices.lightKitchen.eveningMode();
    }
    if(time.hh==20 && time.mm==15){
        console.log('\n',"Mark and Rose move in the living room");
        house.people.Mark.moveTo(house.rooms.livingRoom);
        house.people.Rose.moveTo(house.rooms.livingRoom);
    }
    if(time.hh==22 && time.mm==45) {
        console.log('\n',"Mark and Rose moves from the living room to the master bedroom");
        house.people.Mark.moveTo(house.rooms.entryway);
        house.people.Rose.moveTo(house.rooms.entryway);
        house.people.Mark.moveTo(house.rooms.landingGround);
        house.people.Rose.moveTo(house.rooms.landingGround);
        house.people.Mark.moveTo(house.rooms.landingFirstFloor);
        house.people.Rose.moveTo(house.rooms.landingFirstFloor);
        house.people.Mark.moveTo(house.rooms.hallwayFirstFloor);
        house.people.Rose.moveTo(house.rooms.hallwayFirstFloor);
        house.people.Mark.moveTo(house.rooms.masterBedroom);
        house.people.Rose.moveTo(house.rooms.masterBedroom);
    }
    if (time.hh==23 && time.mm==0) {
        console.log('\n',"Mark and Rose go to sleep")
    }

    if (time.dd == 1 && time.hh == 0 && time.mm == 0) {
        console.log('\n');
        console.log("- END OF THE SCENARIO -");
        Clock.stopTimer();
    }
})

// Start clock
Clock.startTimer()