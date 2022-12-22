function add(strOne:string, strTwo:string):string;
function add(strOne:string, strTwo:string,strThree:string):string;
function add(strOne:string, strTwo:string,strThree:number):string;
function add(paraOne:any,paraTwo:any):string{
    console.log("function is working");
    return paraOne + paraTwo;
}
add("dlf","dkjhf");
console.log("outside working");
console.log("hi");