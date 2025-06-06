const form = document.getElementById('study-form');
const lista = document.getElementById('lista-de-sesiones');
let sesiones = JSON.parse(localStorage.getItem('sesiones')) || [];

function guardarSesiones() {
    localStorage.setItem('sesiones', JSON.stringify(sesiones));
}

function renderSesiones() {
    lista.innerHTML = ''; 
    sesiones.forEach((sesion, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${sesion.materia}</strong> - Tema: ${sesion.tema} <br>
            Fecha: ${sesion.fecha} - Duración: ${sesion.minutos} min
        `;

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar';
        btnEliminar.onclick = () => {
            sesiones.splice(index, 1);
            guardarSesiones();
            renderSesiones();
        };

        li.appendChild(btnEliminar);
        lista.appendChild(li);
    });
}

form.onsubmit = (e) => {
    e.preventDefault();
    const materia = document.getElementById('materia').value.trim();
    const tema = document.getElementById('tema').value.trim();
    const fecha = document.getElementById('fecha').value;
    const minutos = document.getElementById('minutos').value;

    if (materia && tema && fecha && minutos) {
        sesiones.push({ materia, tema, fecha, minutos });
        guardarSesiones();
        renderSesiones();
        form.reset();
    }
};

renderSesiones(); 

