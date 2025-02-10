// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let input = document.getElementById("nombreAmigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final.

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre); // Agregar nombre al array
    actualizarLista(); // Actualizar la lista en la página
    input.value = ""; // Limpiar el campo de entrada

}

