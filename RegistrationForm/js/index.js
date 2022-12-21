
var tempVal = 77;
var handleClick = () => {
    // taking value from input
    var nameval = document.getElementById("fullname");
    // var nameval = document.getElementById("fullname").style.borderColor="red";
    //check full name with vaidation
    if (checkstr(nameval.value)) {
        console.log("sb Theeek");
        nameval.style.borderColor = "initial";
    }
    else {
        //for not valid we show output to the user
        //console.log("kuch to gadbad hai daya")
        nameval.style.borderColor = "red";
    }

    //check emailAddress
    var emailval = document.getElementById("email");
    if (ValidateEmail(emailval.value)) {
        console.log("sb Theeek");
        emailval.style.borderColor = "initial";
    }
    else {
        //for not valid we show output to the user
        //console.log("kuch to gadbad hai daya")
        emailval.style.borderColor = "red";
    }
    
    // check phone number
    var phonenum = document.getElementById("phone");
    alert(phonenum.value);
    
};
// checking validation for fullname
function checkstr(value1) {
    // checking length
    if (value1.length < 3) return false;;
    // check with their ascii code
    for (let i = 0; i < value1.length; i++) {
        let code = value1.charCodeAt(i);
        if ((code >= 97 && code <= 122) || (code >= 65 && code <= 90) || code == 32) continue;
        else {
            return false;
        }
    }
    return true;
}
// email vlidation
function ValidateEmail(inputText) {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.match(mailformat)) {
        //alert("Valid email address!");
        //document.form1.text1.focus();
        return true;
    }
    else {
        //alert("You have entered an invalid email address!");
        //document.form1.text1.focus();
        return false;
    }
}
console.log(ValidateEmail("flkdjfl156@gmail.com"))