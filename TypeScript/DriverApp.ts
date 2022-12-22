import { CricketCoach } from "./CricketCoach.js";
import { GolfCoach } from "./GolfCoach.js";
import { iCoach } from "./iCoach.js";

// create the an objece
let cricketCoach = new CricketCoach();
let golfCoach = new GolfCoach();
 
// declare an array for coaches
let theCoaches : iCoach[]=[];


// add coaches to the array 
theCoaches.push(cricketCoach);
theCoaches.push(golfCoach);

// print  the output
for(let coach of theCoaches){
    console.log(coach.getDailyWorkOut());
}
