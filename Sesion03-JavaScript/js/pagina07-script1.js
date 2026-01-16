//-- Variables de tipo objeto JSON, que pueden cambiar su contenido
//-- Basta con colocarle las dos llaves vacías se determina que es un objeto JSON
let contacto1 = { };
let contacto2 = { };

//-- Constantes de tipo objeto JSON, que no pueden cambiar su contenido
const TIPO_DOCUMENTO = {
    DNI: 'Documento Nacional de Identidad',
    PASAPORTE: 'Pasaporte',
    CEDULA: 'Cédula de Ciudadanía',
    LICENCIA: 'Licencia de Conducir'
};

//-- Función para validar el formulario, asociada al evento submit del formulario, mediante addEventListener
function validarForm(event) {
    try {
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
        contacto1.genero = document.getElementById('genero-m').checked ? document.getElementById('genero-m').value : document.getElementById('genero-f').value;
        contacto1.mensaje = document.getElementById('mensaje').value;
        contacto1.tipoDocumento = TIPO_DOCUMENTO.DNI;
        //-- Forma 2: Sobreescribir el objeto JSON completo
        contacto2 = {
            nombre: document.getElementById('nombre').value,
            pais: document.getElementById('pais').value,
            genero: document.getElementById('genero-m').checked ? document.getElementById('genero-m').value : document.getElementById('genero-f').value,
            email: document.getElementById('email').value,
            mensaje: document.getElementById('mensaje').value,
            tipoDocumento: TIPO_DOCUMENTO.PASAPORTE
        };
        console.log('Contacto 1:', JSON.stringify(contacto1));
        console.log('Contacto 2:', JSON.stringify(contacto2));
    } catch (error) {
        console.error('Error al validar formulario:', error);
    }
    event.preventDefault();  //-- Evita el envío del formulario
    event.stopPropagation(); //-- Evita la propagación del evento en los hijos
    return true;
}

document.forms[0].addEventListener('submit', function(event) {
    validarForm(event);
});

document.getElementById('pais').addEventListener('change', function(event) {
    //document.getElementById('pais-otro').style.display = (event.target.value == 'xx') ? 'block' : 'none';
    if (event.target.value == 'xx') {
        let paisOtroHtml = '<label for="pais-otro">Especifique otro país:</label><br><input type="text" id="pais-otro" name="pais-otro" placeholder="Especifique otro país"><br><br>';
        document.getElementById('divPais').insertAdjacentHTML('beforeend', paisOtroHtml);
    } else {
        let paisOtroInput = document.getElementById('pais-otro');
        if (paisOtroInput) {
            paisOtroInput.previousElementSibling.remove(); // Elimina el br asociado
            paisOtroInput.previousElementSibling.remove(); // Elimina el label asociado
            paisOtroInput.nextElementSibling.remove(); // Elimina el br asociado
            paisOtroInput.nextElementSibling.remove(); // Elimina el br asociado
            paisOtroInput.remove();
        }
    };
});   