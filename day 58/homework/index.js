function handleSelectChange() {
    var select = document.getElementById('sel');
    var selectedOption = select.options[select.selectedIndex].text;

    if (selectedOption === 'ქართული') {
        window.location.href = "http://127.0.0.1:3000/pags leagule/georgia.html";
    }
    else{
        window.location.href = "http://127.0.0.1:3000/index.html"
    }
}
