const tarea = document.getElementById('tarea');
const agregar = document.getElementById('agregar');
const total = document.getElementById('total');
const tablaResultados = document.getElementById('tabla-resultados');
const realizadas = document.getElementById('realizadas');

const tareas = [{ id: 1, tarea: 'Cocinar', checkbox: false }, { id: 2, tarea: 'Programar', checkbox: false }, { id: 3, tarea: 'Hacer ejercicio', checkbox: false }];
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
    }
    renderizarTabla();
});

function borrar(index) {
    tareas.splice(index, 1);
    renderizarTabla();
}
function renderizarTabla() {
    total.innerText = tareas.length;
    realizadas.innerText = tareas.filter(tarea => tarea.checkbox).length;
    tablaResultados.innerHTML = tareas.map((tarea, index) => {
        return `<tr>
                    <th scope="row">${tarea.id}</th>
                    <td>${tarea.tarea}</td>
                    <td><input type="checkbox" ${tarea.checkbox ? 'checked' : ''} class="checkbox"  onclick="tareaRealizada(${index})"></td>
                    <td><i class="fas fa-trash-alt" onclick="borrar(${index})"></i></td>
                </tr>`
    })
        .join('');
}
function tareaRealizada(index) {
    tareas[index].checkbox = !tareas[index].checkbox;
    renderizarTabla();
}
renderizarTabla();