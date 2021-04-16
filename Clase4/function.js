const SetInfoForm = function (formulario) {
    formulario.preventDefault();
    let titulo = formulario.target.titulo.value;
    let detalle = formulario.target.descripcion.value;

    listItems.append(AddNewItems(titulo, detalle));

    formulario.target.titulo.value = null;
    formulario.target.descripcion.value = null;

    formulario.target.titulo.focus();
}

const listItems = document.getElementById('listIntems');
const myForm = document.getElementById("myForm");

myForm.addEventListener('submit', SetInfoForm);

function AddNewItems(t, d) {
    const item = document.createElement('li');
    item.className = 'list-group-item';

    const titulo = document.createElement('p');
    titulo.className = 'lead';
    titulo.innerHTML = t;

    const detalle = document.createElement('p');
    detalle.innerHTML = d;

    item.appendChild(titulo);
    item.appendChild(detalle);

    return item;
}
