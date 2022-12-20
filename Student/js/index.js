// declare global array
let students = [];

class Student{
    constructor(){
        this.name = undefined;
        this.age = undefined;
        this.gender = undefined;
        this.location = undefined;

    }

    // add Method
        add(name,age,gender,location){
            let newRecord = {
                name :  name,
                age  : age,
                gender : gender,
                location : location
            }
            students.push(newRecord);
            console.log(students[0]);
        }

    // list all student
    List(){
        students.forEach(element =>{
            console.log("Name : "+element.name);
            console.log("Age : "+element.age);
            console.log("Gender : "+element.gender);
            console.log("Location : "+element.location);
        })
    }
    // edit Method

    // delete Method
}
let student  = new Student();
while(true) {
    choice = parseInt(window.prompt("1. Add \n 2.List"));

    //switch case
    switch(choice){
        case 1: 
            stName = window.prompt("Enter name: ");
            stAge = parseInt(window.prompt("Enter Age: "));
            stgender = window.prompt("Enter Gender: ");
            stLocation = window.prompt("Enter Location: ");
            student.add(stName,stAge,stgender,stgender,stLocation);
            console.log(student);
            break;
        case 2: 
            student.List();
            console.log(student);
            break;
        default:
            alert("Invalid Input")
    }
}