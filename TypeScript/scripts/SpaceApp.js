"use strict";
// creating class for Astronaut
class Astronaut {
    constructor(mass, name) {
        this.massKg = mass;
        this.sName = name;
    }
}
// creating class for cargo 
class Cargo {
    // creating constructor for cargor
    constructor(mass, material, _sName) {
        this.sName = _sName;
        this.massKg = mass;
        this.material = material;
    }
}
// creating the Rocket class
class Rocket {
    // creating the constructor of Rocket Class
    constructor(_name, totalCapacityKg) {
        this.cargoItem = [];
        this.astronauts = [];
        this.rName = _name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // find total sum of mass of given class
    sumMass(items) {
        let totalSum = 0;
        for (let item of items) {
            totalSum += item.massKg;
        }
        return totalSum;
    }
    // finding total mass current item and total mass
    currentMassKg() {
        return this.sumMass(this.cargoItem) + this.sumMass(this.astronauts);
    }
    // check for it can be add or not
    canAdd(item) {
        if ((this.currentMassKg() + item.massKg) <= this.totalCapacityKg)
            return true;
        else
            return false;
    }
    // first check if it is space available then add otherwise rturn flase
    addCargo(cargo) {
        if (this.canAdd(cargo)) {
            this.cargoItem.push(cargo);
            return true;
        }
        return false;
    }
    // adding astronuat
    addAstronaut(astronaut) {
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}
let rocke = new Rocket("Sameer", 12);
let astr = new Astronaut(22, "Mukit");
console.log(rocke.rName);
rocke.addAstronaut(astr);
console.log(astr.sName);
