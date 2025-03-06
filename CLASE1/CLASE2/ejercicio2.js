// evaluador-de-notas.js

// Declaración de la variable nota
let nota = 85; // Puedes cambiar este valor para probar diferentes casos

// Verificar si la nota es un valor válido (mayor que 0)
if (nota >= 0 && nota <= 100) {
    // Evaluar la nota y generar un mensaje personalizado
    if (nota >= 90) {
        console.log(`Nota: ${nota} - Excelente. ¡Felicidades, has aprobado con la máxima calificación!`);
    } else if (nota >= 75 && nota <= 89) {
        console.log(`Nota: ${nota} - Bien. Has aprobado, sigue esforzándote.`);
    } else if (nota >= 60 && nota <= 74) {
        console.log(`Nota: ${nota} - Suficiente. Has aprobado, pero puedes mejorar.`);
    } else {
        console.log(`Nota: ${nota} - No aprobado. Debes estudiar más para la próxima.`);
    }
} else {
    console.log("Error: La nota debe ser un valor entre 0 y 100.");
}

// Pruebas adicionales con diferentes valores de nota
let notasDePrueba = [45, 60, 75, 90, 0, 100, -10, 110];

notasDePrueba.forEach((notaPrueba) => {
    console.log("\nProbando con nota =", notaPrueba);
    if (notaPrueba >= 0 && notaPrueba <= 100) {
        if (notaPrueba >= 90) {
            console.log(`Nota: ${notaPrueba} - Excelente. ¡Felicidades, has aprobado con la máxima calificación!`);
        } else if (notaPrueba >= 75 && notaPrueba <= 89) {
            console.log(`Nota: ${notaPrueba} - Bien. Has aprobado, sigue esforzándote.`);
        } else if (notaPrueba >= 60 && notaPrueba <= 74) {
            console.log(`Nota: ${notaPrueba} - Suficiente. Has aprobado, pero puedes mejorar.`);
        } else {
            console.log(`Nota: ${notaPrueba} - No aprobado. Debes estudiar más para la próxima.`);
        }
    } else {
        console.log("Error: La nota debe ser un valor entre 0 y 100.");
    }
});