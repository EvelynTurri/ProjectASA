
//const Observable = require("../Utils/Observable");

const Floor = require('../Floor/Floor');
const Room = require("./Room");
const Person = require("../Person/Person");

//GENERAL DEVICES
const AllarmSystem = require("../Devices/GeneralDevices/AllarmSystem");
const MovingSensor = require("../Devices/GeneralDevices/MovingSensors");
const RollerShutter = require('../Devices/GeneralDevices/RollerShutter');

//UNDERGROUND FLOOR
const Car = require("../Devices/00_UndergroundFloor/Car");
const Dryer = require("../Devices/00_UndergroundFloor/Dryer");
const WashingMachine = require("../Devices/00_UndergroundFloor/WashingMachine");

//GROUND FLOOR
const CoffeeMaker = require("../Devices/01_GroundFloor/CoffeeMaker");
const Dishwasher = require("../Devices/01_GroundFloor/DishWasher");
const Fridge = require("../Devices/01_GroundFloor/Fridge");
const InductionHob = require("../Devices/01_GroundFloor/InductionHob");
const Oven = require("../Devices/01_GroundFloor/Oven");

//FIRST FLOOR
const HumidityController = require("../Devices/02_FirstFloor/HumidityController");

const Utility = require("../Utility/Utility");
const Light = require('../Devices/GeneralDevices/Lights');
const VaccumCleaner = require('../Devices/GeneralDevices/VaccumCleaner');
const ChargingBaseVacuumCleaner = require('../Devices/GeneralDevices/ChargingBaseVacuumCleaner');



class House {
    constructor() {
        this.floors = {
            undergroundFloor: new Floor(this, 'underground_floor'),
            groundFloor: new Floor(this, 'ground_floor'),
            firstFloor: new Floor(this, 'first_floor')
        };

        this.rooms = {
            //UNDERGROUND FLOOR
            garage : new Room(this, 'garage', this.floors.undergroundFloor),
            laundry : new Room(this, 'laundry', this.floors.undergroundFloor),
            billiardRoom : new Room(this, 'billiard_room', this.floors.undergroundFloor),
            boilerRoom : new Room(this, 'boilerRoom', this.floors.undergroundFloor),
            hallwayUnderground : new Room(this, 'hallway_underground', this.floors.undergroundFloor),
            landingUnderground : new Room(this, 'landing_underground', this.floors.undergroundFloor),

            //GROUND FLOOR
            kitchen : new Room(this, 'kitchen', this.floors.groundFloor),
            livingRoom : new Room(this, 'living_room', this.floors.groundFloor),
            entryway : new Room(this, 'entryway', this.floors.groundFloor),
            groundBathroom : new Room(this, 'ground_bathroom', this.floors.groundFloor),
            pantry : new Room(this, 'pantry', this.floors.groundFloor),
            landingGround : new Room(this, 'landing_ground', this.floors.groundFloor),

            //FIRST FLOOR
            masterBedroom : new Room(this, 'master_bedroom', this.floors.firstFloor),
            masterBathroom : new Room(this, 'master_bathroom', this.floors.firstFloor),
            childrenBedroom : new Room(this, 'children_bedroom', this.floors.firstFloor),
            childrenBathroom : new Room(this, 'children_bathroom', this.floors.firstFloor),
            wardrobe : new Room(this, 'wardrobe', this.floors.firstFloor),
            greenhouse : new Room(this, 'greenhouse', this.floors.firstFloor),
            hallwayFirstFloor : new Room(this, 'hallway_firstfloor', this.floors.firstFloor),
            landingFirstFloor : new Room(this, 'landing_firstfloor', this.floors.firstFloor),

        };
        
        this.devices = {
                        
            //UNDERGROUND FLOOR
            car: new Car(this, 'car'),
            dryer: new Dryer(this, 'dryer'),
            washingMachine: new WashingMachine(this, 'washing_machine'),

            //GROUND FLOOR
            coffeMaker : new CoffeeMaker(this, 'coffee_maker'),
            dishwasher: new Dishwasher(this, 'dishwasher'),
            fridge: new Fridge(this, 'fridge'),
            inductionHob: new InductionHob(this, 'induction_hob'),
            oven: new Oven(this, 'oven'),

            //FIRST FLOOR
            humityController: new HumidityController(this, 'humidity_controller'),

            //GENERAL DEVICES
            allarmSystem: new AllarmSystem(this, 'allarm_system'),
            rollerShutterKitchen: new RollerShutter(this, 'roller_shutter_kitchen', this.rooms.kitchen),
            rollerShutterLivingRoom: new RollerShutter(this, 'roller_shutter_living_room', this.rooms.livingRoom),
            rollerShutterGroundBathroom: new RollerShutter(this, 'roller_shutter_ground_bathroom', this.rooms.groundBathroom),
            rollerShutterMasterBedroom: new RollerShutter(this, 'roller_shutter_master_bedroom', this.rooms.masterBedroom),
            rollerShutterMasterBathroom: new RollerShutter(this, 'roller_shutter_master_bathroom', this.rooms.masterBathroom),
            rollerShutterChildrenBedroom: new RollerShutter(this, 'roller_shutter_children_bedroom', this.rooms.childrenBedroom),
            rollerShutterChildrenBathroom: new RollerShutter(this, 'roller_shutter_children_bathroom', this.rooms.childrenBathroom),
            rollerShutterGreenhouse: new RollerShutter(this, 'roller_shutter_greenhouse', this.rooms.greenhouse),
            rollerShutterLandingFirstFloor: new RollerShutter(this, 'roller_shutter_landing_firstfloor', this.rooms.landingFirstFloor),

            //LIGHTS
            lightGarage : new Light(this, 'light_garage', this.rooms.garage),
            lightBilliardRoom : new Light(this, 'light_billiard_room', this.rooms.billiardRoom),
            lightHallwayUnderground : new Light(this, 'light_hallway_underground', this.rooms.hallwayUnderground),
            lightLaundry : new Light(this, 'light_laundry', this.rooms.laundry),
            lightLandingUnderground : new Light(this, 'light_landing_underground', this.rooms.landingUnderground),
            lightBoiler : new Light(this, 'light_boiler_room', this.rooms.boilerRoom),

            lightKitchen : new Light(this, 'light_kitchen', this.rooms.kitchen),
            lightLivingRoom : new Light(this, 'light_living_room', this.rooms.livingRoom),
            lightPantry : new Light(this, 'light_pantry', this.rooms.pantry),
            lightGroundBathroom : new Light(this, 'light_ground_bathroom', this.rooms.groundBathroom),
            lightEntryway : new Light(this, 'light_entryway', this.rooms.entryway),
            lightLandingGround : new Light(this, 'light_landing_ground', this.rooms.landingGround),

            lightMasterBedroom : new Light(this, 'light_master_bedroom', this.rooms.masterBedroom),
            lightMasterBathroom : new Light(this, 'light_master_bathroom', this.rooms.masterBathroom),
            lightChildrenBedroom : new Light(this, 'light_children_bedroom', this.rooms.childrenBedroom),
            lightChildrenBathroom : new Light(this, 'light_children_bathroom', this.rooms.childrenBathroom),
            lightWardrobe : new Light(this, 'light_wardrobe', this.rooms.wardrobe),
            lightGreenhouse : new Light(this, 'light_master_bedroom', this.rooms.greenhouse),
            lightHallwayFirstFloor : new Light(this, 'light_hallway_firstfloor', this.rooms.hallwayFirstFloor),
            lightLandingFirstFloor : new Light(this, 'light_landing_firstfloor', this.rooms.landingFirstFloor),

            //VACCUM CLEANER
            vaccumCleanerUnderground : new VaccumCleaner(this, 'vaccum_cleaner_underground', this.floors.undergroundFloor),
            vaccumCleanerGroundFloor : new VaccumCleaner(this, 'vaccum_cleaner_groundfloor', this.floors.groundFloor),
            vaccumCleanerFirstFloor : new VaccumCleaner(this, 'vaccum_cleaner_firstfloor', this.floors.firstFloor)
            //chargingBaseUnderground : new ChargingBaseVacuumCleaner(this, 'charging_base_underground', this.devices.vaccumCleanerUnderground, this.floors.undergroundFloor)

        }

        this.utilities = {
            electricity : new Utility(this, 'electricity'),
            hotWater : new Utility(this, 'hot_water'),
            cleaningTime : new Utility(this, 'cleaning_time')
        }

        
        this.floors.undergroundFloor.addRooms([ this.rooms.garage,
                                                this.rooms.laundry,
                                                this.rooms.billiardRoom,
                                                this.rooms.boilerRoom,
                                                this.rooms.hallwayUnderground,
                                                this.rooms.landingUnderground]);
        
        this.floors.groundFloor.addRooms([  this.rooms.kitchen,
                                            this.rooms.livingRoom,
                                            this.rooms.entryway,
                                            this.rooms.groundBathroom,
                                            this.rooms.pantry,
                                            this.rooms.landingGround]);

        this.floors.firstFloor.addRooms([   this.rooms.masterBedroom,
                                            this.rooms.masterBathroom,
                                            this.rooms.childrenBedroom,
                                            this.rooms.childrenBathroom,
                                            this.rooms.wardrobe,
                                            this.rooms.greenhouse,
                                            this.rooms.hallwayFirstFloor,
                                            this.rooms.landingFirstFloor])

        //Set the doorsTo for each room
        this.rooms.garage.set('doorsTo', [this.rooms.hallwayUnderground]);
        this.rooms.laundry.set('doorsTo', [this.rooms.hallwayUnderground]);
        this.rooms.billiardRoom.set('doorsTo', [this.rooms.hallwayUnderground]);
        this.rooms.boilerRoom.set('doorsTo', []);
        this.rooms.hallwayUnderground.set('doorsTo', [  this.rooms.garage,
                                                        this.rooms.billiardRoom,
                                                        this.rooms.laundry,
                                                        this.rooms.landingUnderground]);
        this.rooms.landingUnderground.set('doorsTo', [  this.rooms.hallwayUnderground,
                                                        this.rooms.landingGround,
                                                        this.rooms.landingFirstFloor]);

        this.rooms.kitchen.set('doorsTo', [ this.rooms.livingRoom,
                                            this.rooms.pantry,
                                            this.rooms.entryway]);
        this.rooms.livingRoom.set('doorsTo', [  this.rooms.kitchen,
                                                this.rooms.entryway]);
        this.rooms.groundBathroom.set('doorsTo', [this.rooms.entryway]);
        this.rooms.pantry.set('doorsTo', [this.rooms.kitchen]);
        this.rooms.entryway.set('doorsTo', [    this.rooms.livingRoom,
                                                this.rooms.kitchen,
                                                this.rooms.groundBathroom,
                                                this.rooms.landingGround]);
        this.rooms.landingGround.set('doorsTo', [this.rooms.entryway,
                                                this.rooms.landingUnderground,
                                                this.rooms.landingFirstFloor]);

        this.rooms.masterBedroom.set('doorsTo', [   this.rooms.masterBathroom,
                                                    this.rooms.wardrobe,
                                                    this.rooms.hallwayFirstFloor]);
        this.rooms.masterBathroom.set('doorsTo', [this.rooms.masterBedroom]);
        this.rooms.childrenBedroom.set('doorsTo', [ this.rooms.childrenBathroom,
                                                    this.rooms.hallwayFirstFloor]);
        this.rooms.childrenBathroom.set('doorsTo', [this.rooms.childrenBedroom]);
        this.rooms.wardrobe.set('doorsTo', [this.rooms.masterBedroom]);
        this.rooms.greenhouse.set('doorsTo', [this.rooms.landingFirstFloor]);
        this.rooms.hallwayFirstFloor.set('doorsTo', [   this.rooms.masterBedroom,
                                                        this.rooms.childrenBedroom,
                                                        this.rooms.landingFirstFloor]);
        this.rooms.landingFirstFloor.set('doorsTo', [   this.rooms.hallwayFirstFloor,
                                                        this.rooms.greenhouse,
                                                        this.rooms.landingUnderground,
                                                        this.rooms.landingGround]);
        
        //Initializing the people in the room
        this.rooms.masterBedroom.set('people_inRoom', 2);
        
        //this.devices.vaccumCleanerUnderground.connectChargerBase(this.devices.chargingBaseUnderground);

        this.people = {
            Mark : new Person(this, 'Mark'),
            Rose : new Person(this, 'Rose'),
            Peter : new Person(this, 'Peter'),
            Lili : new Person(this, 'Lili')
        };

        this.people.Mark.inRoom = this.rooms.masterBedroom;
        this.people.Rose.inRoom = this.rooms.masterBedroom;
        this.people.Peter.inRoom = this.rooms.childrenBedroom;
        this.people.Lili.inRoom = this.rooms.childrenBedroom;
        
    }
}

module.exports = House

