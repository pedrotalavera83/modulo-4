// Consultar la api https://rickandmortyapi.com/ el endpoint para obtener un solo personaje (puede ser por su ID o por su nombre),
// y desplegar la siguiente información:
// - nombre
// - género
// - lista de capítulos donde aparece
// - imagen del personaje

// Desplegar la información usando los recursos de html y css


//Selecciono los elementos del DOM que voy a utilizar
const searchButton = document.getElementById("searchButton");
const rickMortyNameInput = document.getElementById("personajeName");
const rickMortyResults = document.getElementById("results");

function displayRickMortyResults(results) {
    // Limpiar el contenido previo de los resultados
    rickMortyResults.innerHTML = "";

    //usamos comillas invertidas para embebir HTML directamente
    rickMortyResults.innerHTML = `
        <h2>${results.name}</h2>
        <img src="${results.image}" alt="${results.name}">
        <p>Género:${results.gender}</p>
        <p>Capítulos en los que aparece: ${results.episode.length}</p>
    `
}


function buscaPersonaje(nameCharacter) {
    const urlCharacter = `http://rickandmortyapi.com/api/character/?name=${nameCharacter}`
    fetch(urlCharacter)

    .then((response) => {
        if (response.status != 200) {
            throw new Error("Personaje no encontrado");
        }
        return response.json();
    })
        .then((data) => {
            displayRickMortyResults(data.results[0])
            
        })
        .catch(error => {
            rickMortyResults.textContent = error.message
        })
}

//Añadimos un evento al botón de búsqueda para poder hacer la petición a la api
searchButton.addEventListener("click", () => {
    //Obtengo el nombre del pokemon del input
    //trim(): Validación que remueve los espacios sobrantes antes y al final del texto
    //toLowerCase(): Validación para hacer la búsqueda en minúsculas independientemente de cómo lo escriba el usuario
    const nameCharacter = rickMortyNameInput.value.trim(); 
    if (nameCharacter){
        //si el usuario coloca por lo menos un caracteren el input, realizo la petición a la api
        rickMortyNameInput.value = ""; // Limpio el input para que el usuario pueda buscar otro pokemon en el futuro
        buscaPersonaje(nameCharacter) //función que hace la solicitud a la api
    }else{
        //sino, mando una advertencia
        rickMortyResults.textContent = "Por favor, ingresa un nombre de de la serie"
    }

    console.log(nameCharacter);
});


