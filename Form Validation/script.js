let form = document.getElementById("form");
function valid() {

    let fname = document.getElementById("first-name");
    let lname = document.getElementById("last-name");
    let pass = document.getElementById("pass");
    let email = document.getElementById("email");
    let con_pass = document.getElementById("con-pass");
    let flag = 0;

    if (fname.value == "") {
        document.getElementById("error-first-name").innerHTML = "Please Enter Your First Name";
        flag = 0;
    }
    else if (fname.value.length < 3) {
        document.getElementById("error-first-name").innerHTML = "Please Enter Min 3 words";
        flag = 0;
    }
    else {
        document.getElementById("error-first-name").innerHTML = "";
        flag = 1;
    }
    if (lname.value.length == "") {
        document.getElementById("error-last-name").innerHTML = "Please Enter Your Last Name";
        flag = 0;
    }
    else {
        document.getElementById("error-last-name").innerHTML = "";
        flag = 1;
    }
    if(email.value == 0){
        document.getElementById("error-email").innerHTML = "Please Type Your Email";
    }
    else {
        document.getElementById("error-email").innerHTML = "";
        flag = 1;
    }
    if (pass.value != con_pass.value) {
        document.getElementById("err-pass").innerHTML = "Confirm password is not matching";
        flag = 0;
    }
    else {
        document.getElementById("err-pass").innerHTML = "";
        flag = flag * 1;
    }
    if (pass.value == "") {
        document.getElementById("er-pass").innerHTML = "Please Enter Your Password";
        flag = 0;
    }
    else if (pass.value.length < 6) {
        document.getElementById("er-pass").innerHTML = "Enter Min 6 Words";
        flag = 0;
    }
    else {
        document.getElementById("er-pass").innerHTML = "";
        flag = flag * 1;
    }
    if (flag) {
        return true;
    }
    else {
        return false;
    }
}