// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");
        return;
    }

    // Si hay un ganador en pantalla, reiniciamos todo al añadir un nuevo nombre
    let resultado = document.getElementById("resultado");
    if (resultado.innerHTML !== "") {
        amigos = [];  // Vaciar el array
        resultado.innerHTML = "";  // Limpiar el resultado anterior
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = "";
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    let resultado = document.getElementById("resultado");
    let lista = document.getElementById("listaAmigos");

    if (amigos.length === 0) {
        resultado.innerHTML = "<li>No hay amigos en la lista para sortear.</li>";
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar solo el nombre sorteado
    resultado.innerHTML = `<li> ¡${amigoSorteado} es el amigo secreto! </li>`;

    // Limpiar la lista y el array después del sorteo
    amigos = [];
    lista.innerHTML = "";
}
