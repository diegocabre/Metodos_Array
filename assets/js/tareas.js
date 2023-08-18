const tarea = document.getElementById('tarea');
const agregar = document.getElementById('agregar');
const total = document.getElementById('total');
const tablaResultados = document.getElementById('tabla-resultados');
const realizadas = document.getElementById('realizadas');

const tareas = [];

agregar.addEventListener('click', () => {
    if (tarea.value == null || tarea.value == '') {
        alert('Debe rellerar el campo con datos válidos');
    } else {
        tareas.push({
            id: tareas.length + 1,
            tarea: tarea.value,
            checkbox: false
        });
        tarea.value = '';
        total.innerText = tareas.length;
        let html = '';
        tareas.forEach((tarea, index) => {
            html += `<tr>
                <th scope="row">${tarea.id}</th>
                <td>${tarea.tarea}</td>
                <td><input type="checkbox" onclick="tareaRealizada(${index})"></td>
                <td><i class="fas fa-trash-alt" onclick="borrar(${index})"></i></td>
            </tr>`;
        });
        tablaResultados.innerHTML = html;
    }
});

function tareaRealizada(index) {
    if (tareas[index].checkbox == false) {
        realizadas.innerText++;
        tareas[index].checkbox = true;
    } else {
        realizadas.innerText--;
        tareas[index].checkbox = false;
    }
}

function borrar(index) {
    tareas.splice(index, 1);
    total.innerText = tareas.length;
    realizadas.innerText = tareas.length;
    html = '';
    tareas.forEach((tarea, index) => {
        html += `<tr>
                <th scope="row">${tarea.id}</th>
                <td>${tarea.tarea}</td>
                <td><input type="checkbox" onclick="tareaRealizada(${index})"></td>
                <td><i class="fas fa-trash-alt" onclick="borrar(${index})"></i></td>
            </tr>`;
    })
    tablaResultados.innerHTML = html;
}