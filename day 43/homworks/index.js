const password = document.getElementById("password")
const re_password = document.getElementById("re-password")
const button = document.getElementById("button")

button.addEventListener("click", () =>{
    const password = document.getElementById("password").value;
    const re_password = document.getElementById("re-password").value;
    if (password === re_password && password != ""){
        window.location.href = ("http://127.0.0.1:3000/index1.html")
    }
    else{
        alert("try aigen")
    }
} )