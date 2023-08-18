const tarea = document.getElementById('tarea');
const agregar = document.getElementById('agregar');
const total = document.getElementById('total');
const tablaResultados = document.getElementById('tabla-resultados');
const borrar = document.getElementById('borrar');
const realizadas = document.getElementById('realizadas');
const check = document.querySelectorAll('#check');

const tareas = [];

agregar.addEventListener('click', () => {
    if (tarea.value == null || tarea.value == '') {
        alert('Debe rellerar el campo con datos válidos');
    } else {
        const nuevaTarea = tarea.value;
        tareas.push(tarea.value);
        tarea.value = '';
        total.innerText = tareas.length;
        let html = '';
        tareas.forEach((tarea, index) => {
            html += `<tr>
            <th scope="row">${index + 1}</th>
            <td scope="row">${tarea}</td>
            <td scope="row"><input id="check" type="checkbox"></td>
            <td scope="row"><i id="borrar" class="fa-solid fa-trash"></i></td>
            </tr>`;
        });

        tablaResultados.innerHTML = html;
    }
});