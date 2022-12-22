// implementing interface
interface Payload {
    massKg:number;
    //sName:string;
}
// creating class for Astronaut
class Astronaut implements Payload {
    //massKg:number;
    sName:string;
    // creating constructor for all varibles
    massKg: number;
    constructor(mass:number,name:string){
        this.massKg = mass;
        this.sName = name;
    }
}   


// creating class for cargo 
class Cargo implements Payload{
    // initializin class variables
    sName: string;
    massKg : number;
    material : string;
    // creating constructor for cargor
    constructor(mass:number,material:string,_sName:string){
        this.sName=_sName;
        this.massKg = mass;
        this.material = material;
    }
   
}
// creating the Rocket class
class Rocket{
    //initializing the class Varibles
    rName : string;
    totalCapacityKg : number;
     cargoItem : Cargo[] =[];
     astronauts:Astronaut[] = [];
     // creating the constructor of Rocket Class
    constructor(_name:string, totalCapacityKg:number) {
        this.rName = _name;
        this.totalCapacityKg = totalCapacityKg;
    }
    // find total sum of mass of given class
    sumMass(items:Payload[]):number{
        let totalSum:number = 0;
        for( let item of items) {
           totalSum += item.massKg;
        }
       return  totalSum;
    }
    // finding total mass current item and total mass
    currentMassKg():number{
        return this.sumMass(this.cargoItem) + this.sumMass(this.astronauts);
    }
    // check for it can be add or not
    canAdd(item:Payload):boolean{
        if((this.currentMassKg() + item.massKg) <= this.totalCapacityKg) return true;
        else return false;
    }
    // first check if it is space available then add otherwise rturn flase
    addCargo(cargo:Cargo) : boolean{
        if(this.canAdd(cargo)){
            this.cargoItem.push(cargo);
            return true;
        }
        return false
    }
    // adding astronuat
    addAstronaut(astronaut:Astronaut):boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;   
        }
        return false;
    }
}

let rocke = new Rocket("Sameer",12);
let astr = new Astronaut(22,"Mukit");
console.log(rocke.rName);
rocke.addAstronaut(astr);
console.log(astr.sName);