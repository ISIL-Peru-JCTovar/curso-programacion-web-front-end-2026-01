//-- Basta con colocarle las dos llaves vacías se determina que es un objeto JSON
let contacto1 = { };
let contacto2 = { };

function validarForm(event) {
    if (document.getElementById('nombre').value.length < 3) {
        alert('El nombre debe tener al menos 3 caracteres.');
        event.preventDefault();  //-- Evita el envío del formulario
        event.stopPropagation(); //-- Evita la propagación del evento en los hijos
        return false;
    }
    //-- Forma 1: Asignar valores al objeto JSON
    contacto1.nombre = document.getElementById('nombre').value;
    contacto1.email = document.getElementById('email').value;
    contacto1.pais = document.getElementById('pais').value;
    contacto1.genero = document.getElementById('genero').value;
    contacto1.mensaje = document.getElementById('mensaje').value;

    //-- Forma 2: Sobreescribir el objeto JSON completo
    contacto2 = {
        nombre: document.getElementById('nombre').value,
        pais: document.getElementById('pais').value,
        genero: document.getElementById('genero').value,
        email: document.getElementById('email').value,
        mensaje: document.getElementById('mensaje').value
    };

    console.log('Contacto 1:', JSON.stringify(contacto1));
    console.log('Contacto 2:', JSON.stringify(contacto2));

    event.preventDefault();  //-- Evita el envío del formulario
    event.stopPropagation(); //-- Evita la propagación del evento en los hijos

    return true;
}

document.forms[0].addEventListener('submit', function(event) {
    validarForm(event);
});