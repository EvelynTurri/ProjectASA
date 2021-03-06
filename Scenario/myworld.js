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


//Underground VaccumCleaner Agent
let {OnlinePlanning:Planning_UndergroundVaccumCleaner} = require('../pddl/OnlinePlanner')([Move, Switch, Clean, SwitchOn, LeaveChargerBase, CleanAllRoomsUnderground , ReturnChargerBase, SwitchOff, CleanUndergroundFloor])
house.devices.vaccumCleanerUnderground.intentions.push(RetryFourTimesIntention_vc)
house.devices.vaccumCleanerUnderground.intentions.push(Planning_UndergroundVaccumCleaner)
house.devices.vaccumCleanerUnderground.intentions.push(PostmanAcceptAllRequest)
house.devices.vaccumCleanerUnderground.postSubGoal(new Postman())


house.devices.vaccumCleanerUnderground.beliefs.declare('room garage')
house.devices.vaccumCleanerUnderground.beliefs.declare('room laudry')
house.devices.vaccumCleanerUnderground.beliefs.declare('room billiard_room')
house.devices.vaccumCleanerUnderground.beliefs.declare('room hallway_underground')
house.devices.vaccumCleanerUnderground.beliefs.declare('room landing_underground')

house.devices.vaccumCleanerUnderground.beliefs.declare('room1 garage')
house.devices.vaccumCleanerUnderground.beliefs.declare('room2 laudry')
house.devices.vaccumCleanerUnderground.beliefs.declare('room3 billiard_room')
house.devices.vaccumCleanerUnderground.beliefs.declare('room4 hallway_underground')
house.devices.vaccumCleanerUnderground.beliefs.declare('room5 landing_underground')

house.devices.vaccumCleanerUnderground.beliefs.declare('state off')
house.devices.vaccumCleanerUnderground.beliefs.declare('state on')

house.devices.vaccumCleanerUnderground.beliefs.declare('vaccum vaccum_cleaner_underground')

house.devices.vaccumCleanerUnderground.beliefs.declare('adj garage hallway_underground')
house.devices.vaccumCleanerUnderground.beliefs.declare('adj laudry hallway_underground')
house.devices.vaccumCleanerUnderground.beliefs.declare('adj billiard_room hallway_underground')
house.devices.vaccumCleanerUnderground.beliefs.declare('adj landing_underground hallway_underground')
house.devices.vaccumCleanerUnderground.beliefs.declare('adj hallway_underground garage')
house.devices.vaccumCleanerUnderground.beliefs.declare('adj hallway_underground billiard_room')
house.devices.vaccumCleanerUnderground.beliefs.declare('adj hallway_underground hallway_underground')
house.devices.vaccumCleanerUnderground.beliefs.declare('adj hallway_underground laudry')
house.devices.vaccumCleanerUnderground.beliefs.declare('adj hallway_underground landing_underground')


house.devices.vaccumCleanerUnderground.beliefs.declare('in_room vaccum_cleaner_underground garage')
house.devices.vaccumCleanerUnderground.beliefs.declare('switched_off vaccum_cleaner_underground')
house.devices.vaccumCleanerUnderground.beliefs.declare('in_base vaccum_cleaner_underground')

//Ground VaccumCleaner Agent
let {OnlinePlanning:Planning_GroundVaccumCleaner} = require('../pddl/OnlinePlanner')([Move, Switch, Clean, SwitchOn, LeaveChargerBase, CleanAllRoomsGround,  ReturnChargerBase, SwitchOff, CleanGroundFloor])
house.devices.vaccumCleanerGroundFloor.intentions.push(Planning_GroundVaccumCleaner)
house.devices.vaccumCleanerGroundFloor.intentions.push(RetryFourTimesIntention_vc)
house.devices.vaccumCleanerGroundFloor.intentions.push(PostmanAcceptAllRequest)
house.devices.vaccumCleanerGroundFloor.postSubGoal(new Postman())

house.devices.vaccumCleanerGroundFloor.beliefs.declare('room kitchen')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('room entryway')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('room living_room')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('room pantry')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('room ground_bathroom')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('room landing_ground')

house.devices.vaccumCleanerGroundFloor.beliefs.declare('room1 kitchen')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('room2 pantry')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('room3 living_room')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('room4 entryway')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('room5 ground_bathroom')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('room6 landing_ground')

house.devices.vaccumCleanerGroundFloor.beliefs.declare('state off')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('state on')

house.devices.vaccumCleanerGroundFloor.beliefs.declare('vaccum vaccum_cleaner_groundfloor')

house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj kitchen entryway')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj entryway kitchen')

house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj kitchen pantry')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj pantry kitchen')

house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj kitchen living_room')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj living_room kitchen')

house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj living_room entryway')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj entryway living_room')

house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj ground_bathroom entryway')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj entryway ground_bathroom')

house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj entryway landing_ground')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('adj landing_ground entryway')

house.devices.vaccumCleanerGroundFloor.beliefs.declare('in_room vaccum_cleaner_groundfloor kitchen')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('switched_off vaccum_cleaner_groundfloor')
house.devices.vaccumCleanerGroundFloor.beliefs.declare('in_base vaccum_cleaner_groundfloor')

//Firstfloor VaccumCleaner Agent
let {OnlinePlanning:Planning_FirstfloorVaccumCleaner} = require('../pddl/OnlinePlanner')([Move, Switch, Clean, SwitchOn, LeaveChargerBase, CleanAllRoomsFirstFloor,  ReturnChargerBase, SwitchOff, CleanFirstFloor])//, ReturnChargerBase, SwitchOff, CleanFloor])
house.devices.vaccumCleanerFirstFloor.intentions.push(Planning_FirstfloorVaccumCleaner)
house.devices.vaccumCleanerFirstFloor.intentions.push(RetryFourTimesIntention_vc)
house.devices.vaccumCleanerFirstFloor.intentions.push(PostmanAcceptAllRequest)
house.devices.vaccumCleanerFirstFloor.postSubGoal(new Postman())

house.devices.vaccumCleanerFirstFloor.beliefs.declare('room master_bedroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room master_bathroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room children_bedroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room children_bathroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room wardrobe')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room greenhouse')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room hallway_firstfloor')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room landing_firstfloor')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room1 master_bedroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room2 master_bathroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room3 children_bedroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room4 children_bathroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room5 wardrobe')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room6 greenhouse')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room7 hallway_firstfloor')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('room8 landing_firstfloor')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('state off')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('state on')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('vaccum vaccum_cleaner_firstfloor')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj master_bedroom master_bathroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj master_bathroom master_bedroom')

house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj master_bedroom wardrobe')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj wardrobe master_bedroom')

house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj hallway_firstfloor master_bedroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj master_bedroom hallway_firstfloor')

house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj hallway_firstfloor children_bedroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj children_bedroom hallway_firstfloor')

house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj hallway_firstfloor landing_firstfloor')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj landing_firstfloor hallway_firstfloor')

house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj children_bedroom children_bathroom')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj children_bathroom children_bedroom')

house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj landing_firstfloor greenhouse')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('adj greenhouse landing_firstfloor')

house.devices.vaccumCleanerFirstFloor.beliefs.declare('in_room vaccum_cleaner_firstfloor wardrobe')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('switched_off vaccum_cleaner_firstfloor')
house.devices.vaccumCleanerFirstFloor.beliefs.declare('in_base vaccum_cleaner_firstfloor')


//Security System Agent
let {OnlinePlanning:Planning_SecuritySystem} = require('../pddl/OnlinePlanner')([Activate, Deactivate])
house.devices.allarmSystem.intentions.push(Planning_SecuritySystem)
house.devices.allarmSystem.intentions.push(RetryFourTimesIntention_vc)
house.devices.allarmSystem.intentions.push(PostmanAcceptAllRequest)

house.devices.allarmSystem.beliefs.declare('security_system house_security_system')
house.devices.allarmSystem.beliefs.declare('deactivate house_security_system')
house.devices.allarmSystem.postSubGoal(new Postman());

//Doors Locker Agents
let {OnlinePlanning:Planning_DoorsLocker} = require('../pddl/OnlinePlanner')([LockDoors, UnlockDoors, LockCheckStatus, UnlockCheckStatus])
house.devices.doorsLocker.intentions.push(Planning_DoorsLocker);
house.devices.doorsLocker.intentions.push(RetryFourTimesIntention_vc)
house.devices.doorsLocker.intentions.push(PostmanAcceptAllRequest)
house.devices.doorsLocker.postSubGoal(new Postman());

house.devices.doorsLocker.beliefs.declare('door_locker house_door_lockers')
house.devices.doorsLocker.beliefs.declare('security_system house_security_system')
house.devices.doorsLocker.beliefs.declare('deactivate house_door_lockers')

//Charging Base Agent
//Underground
let {OnlinePlanning:Planning_ChargingBase_Underground} = require('../pddl/OnlinePlanner')([inChargerBase, outChargerBase])
house.devices.chargingBaseUnderground.intentions.push(Planning_ChargingBase_Underground);
house.devices.chargingBaseUnderground.intentions.push(RetryFourTimesIntention_vc);
house.devices.chargingBaseUnderground.intentions.push(PostmanAcceptAllRequest)
house.devices.chargingBaseUnderground.postSubGoal(new Postman());

house.devices.chargingBaseUnderground.beliefs.declare('charger_base charging_base_underground')
house.devices.chargingBaseUnderground.beliefs.declare('vaccum vaccum_cleaner_underground')
house.devices.chargingBaseUnderground.beliefs.declare('in vaccum_cleaner_underground charging_base_underground')

//Ground Floor
let {OnlinePlanning:Planning_ChargingBase_GroundFloor} = require('../pddl/OnlinePlanner')([inChargerBase, outChargerBase])
house.devices.chargingBaseGroundFloor.intentions.push(Planning_ChargingBase_GroundFloor);
house.devices.chargingBaseGroundFloor.intentions.push(RetryFourTimesIntention_vc);
house.devices.chargingBaseGroundFloor.intentions.push(PostmanAcceptAllRequest)
house.devices.chargingBaseGroundFloor.postSubGoal(new Postman());

house.devices.chargingBaseGroundFloor.beliefs.declare('charger_base charging_base_groundfloor')
house.devices.chargingBaseGroundFloor.beliefs.declare('vaccum vaccum_cleaner_groundfloor')
house.devices.chargingBaseGroundFloor.beliefs.declare('in vaccum_cleaner_groundfloor charging_base_groundfloor')

//First Floor
let {OnlinePlanning:Planning_ChargingBase_FirstFloor} = require('../pddl/OnlinePlanner')([inChargerBase, outChargerBase])
house.devices.chargingBaseFirstFloor.intentions.push(Planning_ChargingBase_FirstFloor);
house.devices.chargingBaseFirstFloor.intentions.push(RetryFourTimesIntention_vc);
house.devices.chargingBaseFirstFloor.intentions.push(PostmanAcceptAllRequest)
house.devices.chargingBaseFirstFloor.postSubGoal(new Postman());

house.devices.chargingBaseFirstFloor.beliefs.declare('charger_base charging_base_firstfloor')
house.devices.chargingBaseFirstFloor.beliefs.declare('vaccum vaccum_cleaner_firstfloor')
house.devices.chargingBaseFirstFloor.beliefs.declare('in vaccum_cleaner_firstfloor charging_base_firstfloor')




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
        //house.devices.doorsLocker.postSubGoal(new RetryGoal_vc( { goal: new PlanningGoal( { goal: ['deactivate house_door_lockers'] } ) } ))
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
        house.devices.vaccumCleanerFirstFloor.postSubGoal(new RetryGoal_vc( { goal: new PlanningGoal( { goal: ['clean_first_floor vaccum_cleaner_firstfloor'] } ) } ))
        
            
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
        house.devices.vaccumCleanerUnderground.postSubGoal(new RetryGoal_vc( { goal: new PlanningGoal( { goal: ['clean_underground_floor vaccum_cleaner_underground'] } ) } )) 
        house.devices.vaccumCleanerGroundFloor.postSubGoal(new RetryGoal_vc( { goal: new PlanningGoal( { goal: ['clean_ground_floor vaccum_cleaner_groundfloor'] } ) } ))
        house.devices.doorsLocker.postSubGoal(new RetryGoal_vc( { goal: new PlanningGoal( { goal: ['activate house_door_lockers'] } ) } ))
    }

    if (time.dd == 1 && time.hh == 0 && time.mm == 0) {
        console.log('\n');
        console.log("- END OF THE SCENARIO -");
        Clock.stopTimer();
    }
})

// Start clock
Clock.startTimer()


