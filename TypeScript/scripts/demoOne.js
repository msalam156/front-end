"use strict";
console.log("welcome to the Mukeet World");
var addNumber = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
};
//result
const result = addNumber(100, 134);
//console.log(result);
/**
 * create a class named person with field name name age hobbies(multiple hobi)
 * create an object of person class and display information about the person
 * with all hobies
 *
 */
class Person {
    constructor(name, age, hobbies) {
        this.hobbies = [];
        this.pName = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    showData() {
        console.log(`name is ${this.pName} age is ${this.age}`);
        console.log("this.hobbies.values");
        this.hobbies.forEach(element => {
            console.log("element");
        });
        for (let i = 0; i < this.hobbies.length; i++) {
            console.log(this.hobbies[i]);
        }
    }
}
let mukeet = new Person("Alam", 213, ["dance", "movie", "ldkfj"]);
console.log(mukeet.pName);
//  for(let hobby of mukeet.hobbies){
//     console.log(hobby)
//  }
mukeet.showData();
//console.log(mukeet);
// let arr:string[]= ["mukeet","alam","shahrukh"];
// for(let i = 0; i < arr.length; i ++) {
//     console.log(arr[i]);
// } 
// console.log(arr[0]);
