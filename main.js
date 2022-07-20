let agenda = []

let tabla = document.getElementById('mostrar')

function llenarTabla(){
    tabla.innerHTML = ''
    agenda.forEach((dato, index)=>{
        dato.indice=index
        tabla.innerHTML += `
            <div class="contenedor py-4">
                <h2>${dato.nombre}</h2>
                <p>${dato.direccion}</p>
                <div class="contenedor2">
                    <button type="button" class="btn btn-primary">Editar</button>
                </div>
                <div class="contenedor2">
                    <button type="button" class="btn btn-danger eliminar" id=${index}>
                        Eliminar
                    </button>
                </div>
            </div>`
    })

   let deleteButtons = Array.from(document.getElementsByClassName('btn btn-danger eliminar'))
    deleteButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>deleteDatos(parseInt(event.target.id)))
    //console.log(deleteButtons)

})
}

//llenarTabla()

let inputNombre= document.getElementById('inputNombre')
let inputAddress= document.getElementById('inputAddress')
let addButton = document.getElementById('btnRegistrar')

addButton.addEventListener('click', addDatos)


function addDatos(){
    let datos = {
        nombre: inputNombre.value,
        direccion: inputAddress.value,
        indice:''
    }
    agenda.push(datos)
    llenarTabla()
    inputNombre.value=''
    inputAddress.value=''
}

 /*let deleteButtons = Array.from(document.getElementsByClassName('btn btn-danger eliminar'))
 deleteButtons.forEach((button)=>{
     button.addEventListener('click', (event)=>{console.log(event)})
     //deleteDatos(event.target.index)
 })*/

// function deleteDatos(nombre){
//     agenda = agenda.filter((datos)=>datos.nombre!==nombre)
//    // agenda=agenda.splice(id,1)
//     console.log(agenda)
//    llenarTabla()
   function deleteDatos(id){
    agenda = agenda.filter((datos)=>datos.indice!==id)
   // agenda=agenda.splice(id,1)
    console.log(agenda)
   llenarTabla()
}
