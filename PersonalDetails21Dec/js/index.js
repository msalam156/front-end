// declearation for matchPassWorkd
function matchPassWorkd(){
    var password = document.frmReg.password.value;
    var conPassword = document.frmReg.pwdConfirm.value;
    if(password === conPassword){
        return true;
    }
    else{
        alert("Password must match");
        document.getElementById(txtPassword).focus();
        return false;
    }
}

// get data
 function getData(){
    // getting valuse
    var name = document.getElementById("txtName").value;

    // saving to the storage
    localStorage.setItem("txtNameSave",name);
 }