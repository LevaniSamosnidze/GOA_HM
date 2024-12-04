// აქ მაქ ცვლადები sing in-ის
const saxeli = document.getElementById("saxeli")
const elfosta = document.getElementById("elfosta")
const paroli = document.getElementById("pas")
const but = document.getElementById("but")
// აქ მაქ ცვლადები sing up-ის
const name1 = document.getElementById("name").value;
const username = document.getElementById("username").value;
const gmail = document.getElementById("gmail").value;
const pas = document.getElementById("pas").value;
const resetpas = document.getElementById("resetpas").value;
console.log("waidawd")
gilaki.addEventListener("click",() => {
    if (pas == resetpas){
        window.location.href = "http://127.0.0.1:3000/index.html"
    }
    else{
        alert("პაროლები არ ემთხვევა ერთმანეთს")
    }


})



