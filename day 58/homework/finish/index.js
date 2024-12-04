function handleSelectChange() {
    var select = document.getElementById('sel');
    var selectedOption = select.options[select.selectedIndex].text;

    if (selectedOption === 'ქართული') {
        window.location.href = "http://127.0.0.1:3000/finish/georgia.html";
    }
    if ( selectedOption === "english"){
        window.location.href = "http://127.0.0.1:3000/finish/index.html"
    }
}
