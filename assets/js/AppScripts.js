
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
'use strict';
window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
    });
}, false);
})();

function loginValidation(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "bearcat" && password == "bearcat"){
    alert ("Login successfully");
    window.location = "studentHome.html"; // Redirecting to other page.
    return false;
    }else if( username == "admin" && password == "admin"){
        alert ("Login successfully");
        window.location = "admin1.html"; // Redirecting to other page.
        return false;
        }else if( username == "faculty" && password == "faculty"){
            alert ("Login successfully");
            window.location = "facultymain.html"; // Redirecting to other page.
            return false;
            }
    else{
        alert ("Login failed");
    }
}


function adminValidation(){
    var username = document.getElementById("username1").value;
    var password = document.getElementById("password1").value;
    if( username == "admin" && password == "admin"){
        alert ("Login successfully");
        window.location = "admin1.html"; // Redirecting to other page.
        return false;
        }
    else{
        alert ("Login failed");
    }
}

function facultyValidation(){
    var username = document.getElementById("username2").value;
    var password = document.getElementById("password2").value;
    if( username == "faculty" && password == "faculty"){
            alert ("Login successfully");
            window.location = "facultymain.html"; // Redirecting to other page.
            return false;
            }
    else{
        alert ("Login failed");
    }
}
$("#adminNav").click(function(){
    $("#admin").show()
    $("#faculty").hide()
    $("#student").hide()
})
$("#facultyNav").click(function(){
    $("#admin").hide()
    $("#faculty").show()
    $("#student").hide()
})
$("#studentNav").click(function(){
    $("#admin").hide()
    $("#faculty").hide()
    $("#student").show()
})