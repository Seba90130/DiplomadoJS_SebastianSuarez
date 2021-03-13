const lista = document.getElementById("listado")
const form = document.getElementById("mi-formulario")
let items = [];

index = 0;
const renderizarLista = function() {
    
    for ( index ; index < items.length; index++) {
    
        // Crear elementos con javascript de manera dinamica
        const item = document.createElement("li")
        
        
        // Acceder al valor de la lista 
        // mediante su indice
        item.innerHTML = items[index]
    
        // Agregar elementos a un elemento contenedor
        lista.append(item)
    }
}

const accionFormulario = function(event) {
    event.preventDefault()

    // Agregar un elemento al final 
    // de la lista o array
    items.push(event.target.titulo.value)

    // renderizar la lista
    renderizarLista()

}

form.addEventListener("submit", accionFormulario)