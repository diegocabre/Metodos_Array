const tarea = document.getElementById('tarea');
const agregar = document.getElementById('agregar');
const total = document.getElementById('total');
const tablaResultados = document.getElementById('tabla-resultados');
const borrar = document.getElementById('borrar');
const realizadas = document.getElementById('realizadas');

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
            <td scope="row"><button id="btnborrar" type="button">X</button></td>
            </tr>`;
        })
        tablaResultados.innerHTML = html;
    }
    let check = document.getElementById('check');
    function checkAll() {
        if (check.checked == true) {
           /*  const tareaRealizada = realizadas.value;
            realizadas.value = realizadas.value + 1 */
            alert('Tarea Realizada');
        }
        checkAll();
    }
});





