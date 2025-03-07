// Función para agregar un comentario
function agregarComentario() {
    // Obtener el texto del comentario
    let textoComentario = document.getElementById('comentario').value;

    // Validar que el comentario no esté vacío
    if (textoComentario.trim() === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    // Obtener la fecha y hora actual
    let fechaHora = new Date().toLocaleString();

    // Crear un nuevo elemento de comentario
    let nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comentario');
    nuevoComentario.innerHTML = `
        <p>${textoComentario}</p>
        <small>Publicado el ${fechaHora}</small>
        <span class="eliminar" onclick="eliminarComentario(this)">Eliminar</span>
    `;

    // Agregar el comentario a la lista de comentarios
    document.getElementById('lista-comentarios').appendChild(nuevoComentario);

    // Limpiar el campo de texto
    document.getElementById('comentario').value = "";
}

// Función para eliminar un comentario
function eliminarComentario(elemento) {
    // Eliminar el comentario (el div que contiene el comentario)
    elemento.parentElement.remove();
}