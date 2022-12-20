class Student{
    constructor(name, clas, age, gender, location){
        this.name = name;
        this.age = age;
        this.clas = clas;
        this.gender = gender;
        this.location = location;
    }
     editStudents(name, clas, age, gender, location) {
        this.name = name;
        this.age = age;
        this.clas = clas;
        this.gender = gender;
        this.location = location;
    }
    
}
let details = [];
details.push(new Student("Mukeet",4,44,"male","dehli"));
details.push(new Student("Mukeet",4,44,"male","dehli"));
console.log(details[0].name);
