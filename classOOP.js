let Person1 = {
    name: 'Daniel',
   sayHello(){
       console.log(`Hi, my name is  ${this.name}`);
   }
}
let Person2 = {
name: 'Shannon',
sayHello(){
    console.log(`Hi, my name is  ${this.name}`);
}
}
let Person3 = {
    name: 'Jewel',
    sayHello(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
let Person4 = {
    name: 'Oreo',
    sayHello(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
let Person5 = {
    name: 'Ayva',
    sayHello(){
        console.log(`Hi, my name is ${this.name}`);
    }
}
Person1.sayHello();
Person2.sayHello();
Person3.sayHello();
Person4.sayHello();
Person5.sayHello();

function aboutMe(name, city, age){
this.name = name;
this.age = age;
this.city = city;
}
aboutMe.prototype.sayHello = function() {
    console.log(`Hey! My name is ${this.name}, I am ${this.age} and I live in ${this.city}`);
}

let P1 = new aboutMe('Daniel', 39, 'BHam');
let P2 = new aboutMe('Shannon', 52, 'Memphis');
let P3 = new aboutMe('Jewel', 0, 'BHam');
let P4 = new aboutMe('Oreo', 1, 'BHam');
let P5 = new aboutMe('Ayva', 5, 'Murfreesboro');

class Vehicle {
Manufacturer;
Wheels;

aboutVehicle() {
    console.log(`I just purchased vehicle, from ${this.Manufacturer} and it has ${this.Wheels}`);
}
constructor(man, rubber){
    this.Manufacturer = man;
    this.Wheels = rubber;
}

}

class Transportation extends Vehicle {
    doors;
    isTruckBed;
    aboutVehicle() {
        super.aboutVehicle();
        console.log(`I just purchased transportation, from ${this.Manufacturer} and it has ${this.Wheels}`);
    }
    constructor(covers, cab, man, rubber){
        super(man, rubber);
        this.doors = covers;
        this.isTruckBed = cab;

    }
}

class Sedan extends Vehicle {
    size;
    mpg;
    aboutVehicle() {
        super.aboutVehicle();
        console.log(`I just purchased sedan, from ${this.Manufacturer} and it has ${this.Wheels}`);
        
    }
    constructor(big, gas, man, rubber){
        super(man, rubber);
        this.size = big;
        this.mpg = gas;

    }
}

class Motorcycle extends Vehicle {
    haveHandles;
    hasSteeringWheel;
    hasDoors;
    aboutVehicle() {
        super.aboutVehicle();
        console.log(`I just purchased motor, from ${this.Manufacturer} and it has ${this.Wheels}`);
    }
    constructor(grippers, whipTheWhip, sealer, man, rubber){
        super(man, rubber);
        this.haveHandles = grippers;
        this.hasSteeringWheel = whipTheWhip;
        this.hasDoors = sealer;
    }
}

let trans = new Transportation('yes',  true, 'ford', 4);
trans.aboutVehicle();
//let noBed = new Transportation('yes, false, ')
