

document.addEventListener("DOMContentLoaded",function (){
    const form = document.getElementById("loginform");

form.addEventListener("submit", function (event) {
event.preventDefault(); 
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;


console.log("Login submitted:", email, password);


alert("Login submitted!");
});
});
