let form = document.getElementById('my_from')

let btn = document.getElementById('btn')
let list = []

function login(name, email1, pas1){
    this.name = name;
    this.pas = pas1;
    this.email = email1;
}

btn.addEventListener('click', function(e){
    e.preventDefault();
    let name1 = form.name;
    let email = form.email;
    let pas = form.pas;
    
    let p = new login(name1.value, email.value, pas.value)
    list.push(p)
    console.log(list);
    
    
})



