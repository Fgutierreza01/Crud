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
                    <button type="button" class="btn btn-primary editar">Editar</button>
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
    button.addEventListener('click', (event)=>deleteDatos(parseInt(event.target.id)))})
    let editButtons = Array.from(document.getElementsByClassName('btn btn-primary editar'))
    editButtons.forEach((button)=>{
    button.addEventListener('click', (event)=>editDatos(parseInt(event.target.id)))}) 
}


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
   function deleteDatos(id){
    agenda = agenda.filter((datos)=>datos.indice!==id)
   llenarTabla()
}
  
function editDatos(id){
    agenda = agenda.filter((datos)=>datos.indice!==id)
    inputNombre.value=(window.prompt("Ingrese nuevo nombre"))
    inputAddress.value=(window.prompt("Ingrese nueva dirección"))
    deleteDatos()
    llenarTabla()
  }