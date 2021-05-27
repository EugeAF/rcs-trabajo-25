// Guardar en LS - Tanto key como value deben ser . Si necesito transformar a string
// usamos el metodo JSON.stringify();
// localStorage.setItem('key', JSON.stringify(value)); 

// localStorage.removeItem('key');

// // Si el elemento esta en string lo transformamos a objeto con JSON.parse()
// let elemento = localStorage.getItem('key')
// elemento = JSON.parse(elemento);

let content = document.querySelector('#noticias');
let noticias = JSON.parse(localStorage.getItem('noticias')) || [];

function listarNoticias() {
    content.innerHTML = '';

    noticias.forEach(function (item, index) {
        content.innerHTML += `<tr>
            <th scope="row">${index}</th>
            <td>${item.titulo}</td>
            <td>${item.body}</td>
            <td>${item.autor}</td>
            <td><button onclick="eliminarNoticia(${index})">Eiminar</button></td>
            <td><button onclick="editarTitulo(${index})">Editar Titulo</button></td>
            <td><button onclick="editarContenido(${index})">Editar Contenido</button></td>
            <td><button onclick="editarAutor(${index})">Editar Autor</button></td>
        </tr>`;
    })
}

function agregarNoticia() {
    let titulo = document.querySelector('#Titulo').value;
    let contenido = document.querySelector('#Contenido').value;
    let autor = document.querySelector('#Autor').value;

    noticias.push({
        titulo: titulo,
        body: contenido,
        autor: autor
    });

    localStorage.setItem('noticias', JSON.stringify(noticias));

    listarNoticias();
}

function eliminarNoticia(index) {
    noticias.splice(index, 1);
    listarNoticias()
}

function editarTitulo(index){
    noticias[index].titulo = prompt('Ingrese el Titulo')
    listarNoticias();
}

function editarContenido(index){
    noticias[index].body = prompt('Ingrese el Contenido')
    listarNoticias();
}

function editarAutor(index){
    noticias[index].autor = prompt('Ingrese el Autor')
    listarNoticias();
}

listarNoticias();
