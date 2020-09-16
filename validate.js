var fname = document.forms["register_form"]["FirstName"];
var lname = document.forms['register_form']['LastName'];
var email = document.forms['register_form']['email'];
var password = document.forms['register_form']['password'];


var fname_error = document.getElementById('fname_error');
var lname_error = document.getElementById('lname_error');
var email_error = document.getElementById('email_error');
var pwd_error = document.getElementById('pwd_error');
var fname_alpha = document.getElementById('fname_alpha');
var lname_alpha = document.getElementById('lname_alpha');


function validated() {
    var regex = /^[a-zA-Z]+$/;
    if(regex.test(fname.value) == false){
        fname.style.border = "1px solid red";
        fname_alpha.style.display ="block";
        return false;
    }
    if(regex.test(lname.value) == false){
        fname.style.border = "1px solid red";
        lname_alpha.style.display ="block";
        return false;
    }
    if (fname.value == "") {
        fname.style.border = "1px solid red";
        fname_error.style.display = "block";
        fname.focus();
        return false;
    }
    if (lname.value == "") {
        lname.style.border = "1px solid red";
        lname_error.style.display= "block";
        lname.focus();
        return false;
    }
    if (email.value == "") {
        email.style.border = "1px solid red";
        email_error.style.display ="block";
        email.focus();
        return false;
    }
    if (password.value == "") {
        password.style.border = "1px solid red";
        pwd_error.style.display="block";
        password.focus();
        return false;
    }
    
}
