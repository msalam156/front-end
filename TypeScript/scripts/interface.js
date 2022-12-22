"use strict";
console.log("inrerface");
// enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["MANAGER"] = 2] = "MANAGER";
    Role[Role["COORDINATOR"] = 3] = "COORDINATOR";
})(Role || (Role = {}));
;
// Class 
class PermanentEmployee {
    // constructor
    constructor(code, _name) {
        // additional file
        this.role = '';
        this.isContract = false;
        this.empCode = code;
        this.empName = _name;
    }
    getSalary(empCode) {
        return 44;
    }
    // custom methods
    getWages() {
        console.log("hourly rate is : " + 1000);
    }
}
// entry point
let emp = new PermanentEmployee(100, 'mark');
console.log(emp.empName);
