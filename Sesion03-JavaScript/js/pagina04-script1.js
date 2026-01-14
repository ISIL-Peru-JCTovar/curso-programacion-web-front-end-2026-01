document.addEventListener('DOMContentLoaded', function() {
    const cursos = ['JavaScript Básico', 'HTML5 y CSS3', 'Desarrollo Web Avanzado', 'React.js', 'Node.js', 'Bases de Datos'];
    const listaCursos1 = document.getElementById('listaCursos1');
    for (let i = 0; i < cursos.length; i++) {
        const li = document.createElement('li');
        li.textContent = cursos[i];
        listaCursos1.appendChild(li);
    }
});