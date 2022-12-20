const msg = document.getElementById("demo");
// msg.innerHTML = "<div> <h2>hi</h2></div>"
let string = "A the fox jumped over lazy dog";
//  alert(string.slice(2,10));
// alert(string.substring(2,10));
// alert(string.splice(2,10));

// alert(string.charAt(0));// it give char
// alert(string.charCodeAt(0));// it give ascii  value of that charactor
// let num1 = prompt("Entet the first number");
// let num2 = prompt("Entet the first number");
// let value1 = parseInt(num1);
// let value2 = parseInt(num2);
// let sum = value1 + value2;
// alert(sum);
//alert(new Date().getDay());
//********************************************** */
// function
//********************************************** 
// Reusaable blocks of code that carry out a specific
//  task
// */
function add(num1, num2) {
    return num1 + num2;
}
// let sum = add(3,6);
// alert(sum);

function getDayAcording(){
    let day = new Date().getDay();
    switch(day) {
        case 1: alert(" Today is Monday");
            break;
        case 2 : alert("Today is Tuesday");
            break;
        case 3: alert("Today is Wednesday");
            break;
        case 4: alert("Today is  Thursday");
            break;
        case 5: alert("Today is Friday");
            break;
        case 6: alert("Today is  Saturday");
            break;
        case 7: alert("Today is  Sunday");
            break;
    }
}
function printNumber( from,  to) {
        for(let i = from; i <= to; i++) {
            console.log(i);
        }
}
let addi=(a,b)=>{
    return a + b;
}
// alert(addi(5,7));
// another type
let mul = a =>{
    return a;
}
// alert(mul(544));

// another one of callback function
let callback = _=>{
    return 55;
}
//alert(callback());
let sub =_=>{

}


// array
const item = ["mukeet", 6, 'a', true,null];
item.forEach(element => {
    alert(typeof(element));
    
});