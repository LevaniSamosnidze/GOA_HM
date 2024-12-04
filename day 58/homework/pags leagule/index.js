function handleSelectChange() {
    var select = document.getElementById('sel');
    var selectedOption = select.options[select.selectedIndex].text;

    if (selectedOption === 'Englesh') {
        window.location.href = "http://127.0.0.1:3000/index.html";
    }
}
