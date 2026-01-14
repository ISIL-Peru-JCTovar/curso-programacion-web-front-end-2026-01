function presionarTecla(event) {
    //alert('Tecla presionada: ' + event.key);
    if (event.key === "Enter") { // Enter
        document.getElementById('output1').innerHTML = document.getElementById('input1').value;
    }
}

document.getElementById('input1').addEventListener('keypress', function(event) {
    presionarTecla(event);
});

/*
document.getElementById('input1').addEventListener('keydown', function(event) {
    presionarTecla(event);
});
document.getElementById('input1').addEventListener('keyup', function(event) {
    presionarTecla(event);
});
*/