# Autonomous Software Agent

## Project - Academic Year 2021/2022

University of Trento - Trento, 2022

Evelyn Turri - evelyn.turri@studenti.unitn.it

---
## Introduction
In this project I decided to create different classes, in particular for: [the house](./Room/House.js), [the floors](./Floor/Floor.js), [the rooms](./Room/Room.js), [the people](./Person/Person.js) and the devices.

Then in [myworld.js](./Scenario/myworld.js) file I described a possible scenario for the house, with some log messages.

I described in the following paragraph the different classes and the different agents. 

To run the code is enough to enter in the folder [Scenario](./Scenario/) and run the command:  `node scenario.js`.

*NOTE* : In the last paragraph there is the description of 4 important information.

## Classes
### House 
The class house ([house.js](./Room/House.js)) is where I built the house, in which I created the different floors, rooms, devices and people.
The constructor presents in order: the floors, the rooms, the devices and the people. Then there are also various functions which make the rooms communicating between each others and a function to add the devices in each room.

### Floor
I create a class for the floor ([floor.js](./Floor/Floor.js)). This class presents a `constructor(house,name)` with a reference to the house and the name of the floor, and then it has also a vector with inside the different rooms in that floor. In order to add the rooms in the House class to that vector, I created a function `addRooms(rooms)`, where rooms is a vector, and each element is added to the rooms vector of the floor. 

### Rooms 
The room class ([room.js](./Room/Room.js)) presents a `constructor(house,name)` with reference to the house and the name. Furthermore presents inside also: a vector `doorsTo`, which have inside the rooms connected to that specific room; a vector `devices`, which is a list of devices in that room.

Every room has a moving sensor system and a camera, this is why I decided to implement two functions (`createMovingSensorsSystem()` and `createCamerasSystem()`) in that class in order to create directly a moving sensor system and the camera system, once the room has been created.

### Devices
For each device I implemented a different class, because each of them has different characteristics and different functions. A common fact is that all of them have the reference to the house and some of them also to the specific room in which they are located.

### People
There are 4 people in the house: Mark, Rose and the 2 children Peter and Lili. 

The class Person ([Person.js](./Person/Person.js)) extends `Observable` and it has the reference to the house too. There is an important function, which is: 
- `moveTo` : it allows the person to move from a room to another, only if the room in which there is the person has a door to the arrival room.

## Scenario
A possible scenario is described in the file [myworld.js](./Scenario/myworld.js), where there is the instantiation of:
- The House (`var House`)
- The House Agent (`var houseAgent`)
- The CoffeeMaker Agent (`var coffeeMakerAgent`)

There is also a part for the Clock, and some checks for the hour.

## Agents

### House Agent
The house agent controls the house and it has different intentions:
- [Moving Sensor Intention](./Intention/MovingSensorIntention.js) : understands whenever a person moves from a room to another
- [Roller Shutter Intention](./Intention/RollerShutterIntention.js) : every day lift up the roller shutters at 6 a.m. and pull down them at 9 p.m.
- [Light Intention](./Intention/LightsIntention.js) : it is implemented only for the light of the kitchen, and the intention is to switch on the light when the moving system of the kitchen is perceiving the movement, and when it perceive the movement as false for the first time it switches off the lights. For the moment this intention is implemented only for the light of the kitchen.

### Coffee Maker Agent
The coffee maker agent switches on and switches off the coffee maker, starts to prepare coffee at 6 a.m.and finishes at 6:15 a.m..

## NOTE
### 1.
There are 2 files [run1.log](./run1.log) and [run2.log](./run2.log), where there is the same implemented scenario, but with different sutup of the function `setTimeout()`.
The 2 different setups are:
```javascript
await new Promise( res => setTimeout(res, 0))
```
```javascript
await new Promise( res => setTimeout(res, 10))
```
There are two different setups because if the timeout is too large for the roller shutters and the coffee maker there were too many log for a certain hour, because the `while(true)` in file intentions was checking too many times the condition in a specific hour, while if the timeout was too small (like 0), the intention of the light was logged after 15 minutes.

### 2.
In the [LightsIntention](./Intention/LightsIntention.js) class I could not use `notifyChange('perceive')`, because there was another `notifyChange('perceive')` in the [MovingSensorIntention](./Intention/MovingSensorIntention.js) class, and one was overwriting the other.

### 3.
For the moment, as example, the only 2 person moving in the house are mark and Rose. 

### 4.
The Clock stops after 2 days.




