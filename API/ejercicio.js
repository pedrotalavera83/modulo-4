// Consultar la api https://rickandmortyapi.com/ el endpoint para obtener un solo personaje (puede ser por su ID o por su nombre),
// y desplegar la siguiente información:
// - nombre
// - género
// - lista de capítulos donde aparece

// Desplegar el mensaje en consola

function buscaPersonaje(numeroId) {
    fetch("https://rickandmortyapi.com/api/character/" + numeroId)
        .then((response) => response.json())
        .then((data) => {
            console.log("Nombre: " + data.name);
            console.log("Género: " + data.gender);
            console.log(`Capítulos en los que aparece, ${data.episode.length}:`);
            data.episode.forEach((episode) => console.log("- " + episode));
        })
        .catch((error) => console.error("Error:", error));
}

buscaPersonaje(2); // Busca al personaje con ID 1