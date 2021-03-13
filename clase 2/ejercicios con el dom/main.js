// Obtener referencia del tag body a traves de su identificador unico
const tagBody = document.getElementById("body");
const btnCambiarColor = document.getElementById("btn-cambiar-color");


const accion = function(evet) {
    // tagBody.style.backgroundColor = "#323ebe"
    // tagBody.style.fontSize = "64px"

    //como agregar un clase (CSS) al elemento seleccionado
    tagBody.classList.add("cambiar-fondo", "gregar-padding")
}

// Validamos que conseguimos la referencia con exito
console.log(tagBody)



// efectuar cambios en estilos con js
btnCambiarColor.addEventListener("click",accion);


