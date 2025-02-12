// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar espacios en blanco al inicio y final.

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {  // Verifica si el nombre ya existe en el array
        alert("Ese nombre ya está en la lista.");
        return;
    }

    amigos.push(nombre); // Agregar nombre al array
    actualizarLista(); // Actualizar la lista en la página
    input.value = ""; // Limpiar el campo de entrada
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    for (let i = 0; i < amigos.length; i++) { // Usamos un bucle for
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Agregamos el nombre del amigo
        lista.appendChild(li); // Añadimos el <li> a la lista
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (amigos.length === 0) { 
        resultado.innerHTML = "<li>No hay amigos en la lista para sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    let amigoSorteado = amigos[indiceAleatorio];

    resultado.innerHTML = `<li> ¡${amigoSorteado} es el amigo secreto! </li>`;
}
