// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; // Array para almacenar los nombres ingresados

// Función para agregar amigos a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo"); // Capturamos el valor del campo de entrada
    const nombre = input.value.trim(); // Obtenemos el valor y eliminamos espacios al inicio y final

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Si el campo está vacío, salimos de la función
    }

    // Si el nombre es válido, lo añadimos al array de amigos
    amigos.push(nombre);


    // Limpiar el campo de entrada
    input.value = "";
    
    // Actualizar la lista de amigos en la interfaz
    actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos"); // Obtener el elemento de la lista

    // Limpiar la lista existente para evitar duplicados
    listaAmigos.innerHTML = "";

    // Iterar sobre el array de amigos
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Crear un nuevo elemento <li>
        li.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        listaAmigos.appendChild(li); // Agregar el <li> a la lista
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya al menos un amigo en el array
    if (amigos.length < 1) {
        alert("Debes agregar al menos un amigo para sortear.");
        return; // Salir de la función si no hay amigos
    }

    // Generar un índice aleatorio entre 0 y la longitud del array menos 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado usando el índice aleatorio
    const amigoSeleccionado = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    mostrarResultado(amigoSeleccionado);
}

// Función para mostrar el resultado en la interfaz
function mostrarResultado(amigoSeleccionado) {
    const resultadoContenedor = document.getElementById("resultado");

    // Limpiar cualquier mensaje anterior
    resultadoContenedor.innerHTML = "";

    // Mostrar el mensaje con el amigo secretO sorteado y con el color adecuado (#0fce3d)
    resultadoContenedor.innerHTML = `El amigo secreto sorteado es: <span style="color: #24e315; font-weight: bold;">${amigoSeleccionado}</span>`;
}
