console.log("inrerface");
// declaration
interface IEmployee{
    empCode:number;
    empName:string;
    getSalary:(empCode:number)=>number;
}
// enum
enum Role{ADMIN = 1, MANAGER = 2, COORDINATOR = 3};

// Class 
class PermanentEmployee implements IEmployee{
    empCode: number;
    empName : string;
    // additional file
    role : any ='';
    isContract:boolean=false;

    // constructor
    constructor(code:number, _name:string){
        this.empCode = code;
        this.empName = _name;
    }

    getSalary(empCode:number): number{
        return 44;
    }
    
    // custom methods
    getWages(){
        console.log("hourly rate is : "+ 1000);
    }

}

// entry point
let emp = new PermanentEmployee(100,'mark');
console.log(emp.empName);