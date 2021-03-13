const tagFormulario = document.getElementById("mi-formulario");


//Creamos la accion para trabajar con el fomulario
const accion = function(event) {
    event.preventDefault()

    //Obtener propiedades del evento
    console.log(event.target.nombre.value)
    console.log(event.target.apellido.value)
}


//Agregar accion al evento
tagFormulario.addEventListener("submit", accion)

