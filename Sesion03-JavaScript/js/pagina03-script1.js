function validarForm(event) {
    if (document.getElementById('nombre').value.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        event.preventDefault();  //-- Evita el envío del formulario
        event.stopPropagation(); //-- Evita la propagación del evento en los hijos
        return false;
    }
    return true;
}

document.forms[0].addEventListener('submit', function(event) {
    validarForm(event);
});