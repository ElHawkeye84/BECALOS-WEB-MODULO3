// Definición de la clase Libro
class Libro {
    // Constructor para inicializar las propiedades del libro
    constructor(titulo, autor, anio, estado) {
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
        this.estado = estado;
        this.capitulos = [["1.- El inicio", "2.- Otro", "3.- Rollo", "4.- Quibole"]]; // Lista de capítulos inicial
    }

    // Método para describir el libro
    describirLibro() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}. El estado es: ${this.estado}.`);
    }

    // Método para agregar un capítulo (opcional)
    agregarCapitulo(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`Capítulo "${capitulo}" agregado al libro "${this.titulo}".`);
    }

    // Método para eliminar un capítulo (opcional)
    eliminarCapitulo(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo "${capitulo}" eliminado del libro "${this.titulo}".`);
        } else {
            console.log(`Capítulo "${capitulo}" no encontrado en el libro "${this.titulo}".`);
        }
    }
}

// Crear un objeto Libro con los nuevos datos
let libro1 = new Libro("QUIOBOLE CON", "ROSADO YORDI", 2003, "de México");

// Describir el libro
libro1.describirLibro();

// Mostrar la lista de capítulos inicial
console.log("Capítulos iniciales del libro:", libro1.capitulos);

// Agregar un nuevo capítulo (opcional)
libro1.agregarCapitulo("5.- PODCAST");

// Eliminar un capítulo (opcional)
libro1.eliminarCapitulo("2.- Otro");

// Mostrar la lista de capítulos actualizada
console.log("Capítulos actualizados del libro:", libro1.capitulos);