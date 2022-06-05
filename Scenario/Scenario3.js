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

//House Agent
var house = new House();

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

Clock.global.observe('mm', (mm) => {
    var time = Clock.global
    if (time.dd == 0 && time.hh == 0 && time.mm == 15) {
        console.log('\n');
        console.log("- START OF THE SCENARIO -", '\n');
    }
    if(time.hh==8 && time.mm==00) {
        house.devices.doorsLocker.postSubGoal(new RetryGoal_vc( { goal: new PlanningGoal( { goal: ['activate house_door_lockers'] } ) } ))
    }
    if (time.hh==22 && time.mm==0) {
        house.devices.doorsLocker.postSubGoal(new RetryGoal_vc( { goal: new PlanningGoal( { goal: ['deactivate house_door_lockers'] } ) } ))
    }

    if (time.dd == 1 && time.hh == 0 && time.mm == 0) {
        console.log('\n');
        console.log("- END OF THE SCENARIO -");
        Clock.stopTimer();
    }
})

// Start clock
Clock.startTimer()