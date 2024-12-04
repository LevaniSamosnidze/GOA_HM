// აქ არის sing up ის ცვლადები
let user = document.getElementById("user")
let email = document.getElementById("email")
let pas = document.getElementById("pas")
// აქ არის sing in ის ცვლადები
let user1 = document.getElementById("user1")
let email1 = document.getElementById("email1")
let pas1 = document.getElementById("pas1")
let but1 = document.getElementById("but1")

but1.addEventListener("click", () =>{
    let user1 = document.getElementById("user1").value;
    let email1 = document.getElementById("email1").value;
    let pas1 = document.getElementById("pas1").value;
    let but1 = document.getElementById("but1").value;
    let user = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let pas = document.getElementById("pas").value;
    if (user === user1  && email == email1 &&  pas == pas1 && user != ""){
        window.location.href = "http://127.0.0.1:3000/pags/index.html"
    }
    else{
        alert("The entered data is incorrect")
    }
})


