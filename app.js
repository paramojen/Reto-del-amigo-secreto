// Lista de amigos
let amigos = [];

// Seleccionar elementos del DOM
let input = document.getElementById("amigo");
let lista = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

// Permitir añadir amigo presionando Enter
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        agregarAmigo();
    }
});

// Función para agregar un amigo
function agregarAmigo() {
    let nombre = input.value.trim();

    // Validar que no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Validar que no tenga números
    if (/\d/.test(nombre)) {
        alert("No se admiten caracteres numéricos.");
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);

    // Limpiar campo de texto
    input.value = "";

    // Mostrar la lista en pantalla
    mostrarLista();
}

// Función para mostrar la lista de amigos
function mostrarLista() {
    lista.innerHTML = ""; // limpiar lista

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Elegir un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado
    resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;

    // Limpiar la lista para un nuevo sorteo
    amigos = [];
    lista.innerHTML = "";
}
