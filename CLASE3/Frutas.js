// Paso 1: Declarar un arreglo con frutas
let frutas = ["manzana", "banana", "manzana", "naranja", "banana", "uva", "manzana", "naranja", "uva", "pera"];

// Paso 2: Crear un objeto para contar las frutas
let contadorFrutas = {};

// Paso 3: Usar un ciclo for para contar las frutas
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i]; // Obtenemos la fruta actual
    if (contadorFrutas[fruta]) {
        contadorFrutas[fruta]++; // Si la fruta ya existe, aumentamos su contador
    } else {
        contadorFrutas[fruta] = 1; // Si la fruta no existe, la inicializamos con 1
    }
}

// Paso 4: Imprimir el resultado en la consola
console.log("Cantidad de cada tipo de fruta:");
console.log(contadorFrutas);