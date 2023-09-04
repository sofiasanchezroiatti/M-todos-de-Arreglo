const btn = document.querySelector('#agregar')
const arregloTareas = [];
let ultimoId = 1

const eliminarTarea = function(idTarea){
    const posicion = arregloTareas.findIndex((e) => e.id == idTarea);
    
    if (posicion >= 0) {
        arregloTareas.splice(posicion,1);

        dibujaLista();
    }

}

const marcarTareaRealizada = function(idTarea){
    const posicion = arregloTareas.findIndex((e) => e.id == idTarea);

    
    if (arregloTareas[posicion].realizada == true){

        arregloTareas[posicion].realizada = false;
    }
    else if (arregloTareas[posicion].realizada == false){

        arregloTareas[posicion].realizada = true;
    }

    dibujaLista();
}

const dibujaLista = function(){

  

    const listaTareas = document.querySelector('#listaTareas');

    let htmlElementosLista = `
    <thead>
        <tr>
            <th>ID</th>
            <th>Tarea</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    `;
    for (const tarea of arregloTareas) {
        if (tarea.realizada){
            statusCheck = 'checked';
        } else {
            statusCheck = '';
        }

        htmlElementosLista += `
        <tr>
            <td>${tarea.id}</td>
            <td>${tarea.nombre}</td>
            <td><input type="checkbox" ${statusCheck} onclick="marcarTareaRealizada(${tarea.id})"> <button class="btn btn-light" onclick="eliminarTarea(${tarea.id});"><i class="fa-solid fa-xmark"></i></button><td>
        </td>`;
    }
    htmlElementosLista += '</tbody';

    listaTareas.innerHTML = htmlElementosLista;
    document.querySelector('#totalTareas').innerHTML = arregloTareas.length;

    const arregloTareasRealizadas = arregloTareas.filter((e) => e.realizada == true);
    document.querySelector('#tareasRealizadas').innerHTML = arregloTareasRealizadas.length;
    
}


btn.addEventListener('click', function(){
    if (nombreTarea.value == '' ){
        alert('Debes ingresar una tarea')
    }    else {
    
    const nombreTarea = document.querySelector('#nombreTarea').value;
    const id = ultimoId;
    const realizada = false;

    const tarea = {
        id: id,
        nombre: nombreTarea,
        realizada: realizada,
    }

    arregloTareas.push(tarea);
    
    dibujaLista()

    ultimoId++;
    }

});

