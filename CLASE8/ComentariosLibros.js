// Función para agregar un comentario
document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtener el texto del comentario
    const commentText = document.getElementById('comment').value;

    // Validar que el comentario no esté vacío
    if (commentText.trim() === "") {
        alert("Por favor, escribe un comentario.");
        return;
    }

    // Obtener la imagen subida
    const imageFile = document.getElementById('image').files[0];

    // Obtener la fecha y hora actual
    const fechaHora = new Date().toLocaleString();

    // Crear un nuevo elemento de comentario
    const nuevoComentario = document.createElement('div');
    nuevoComentario.classList.add('comment');

    // Mostrar el texto del comentario
    nuevoComentario.innerHTML = `
        <p>${commentText}</p>
        <small>Publicado el ${fechaHora}</small>
        <span class="delete-btn" onclick="eliminarComentario(this)">Eliminar</span>
    `;

    // Mostrar la imagen si se subió una
    if (imageFile) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const image = document.createElement('img');
            image.src = e.target.result;
            nuevoComentario.appendChild(image);
        };
        reader.readAsDataURL(imageFile);
    }

    // Agregar el comentario a la lista de comentarios
    document.getElementById('comments-list').appendChild(nuevoComentario);

    // Limpiar el campo de texto y el campo de imagen
    document.getElementById('comment').value = "";
    document.getElementById('image').value = "";
});

// Función para eliminar un comentario
function eliminarComentario(elemento) {
    // Eliminar el comentario (el div que contiene el comentario)
    elemento.parentElement.remove();
}

// Función para mostrar el mensaje secreto y el GIF
function mostrarMensajeSecreto() {
    const secretMessage = document.getElementById('secret-message');
    secretMessage.classList.remove('hidden'); // Muestra el mensaje secreto
}