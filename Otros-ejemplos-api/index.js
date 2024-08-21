//Selecciono los elementos del DOM que voy a utilizar
const searchButton = document.getElementById("searchButton");
const pokemonNameInput = document.getElementById("pokemonName");
const pokemonInfoDiv = document.getElementById("pokemonInfo");

function displayPokemonInfo(pokemon){
    //Limpiar el contenido previo del div pokemonInfoDiv
    pokemonInfoDiv.innerHTML = ""

    //usamos comillas invertidas para embebir HTML directamente
    pokemonInfoDiv.innerHTML =`
        <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <p>Weight: ${pokemon.weight}</p>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `

}

function fetchPokemonData(pokemonName) {
    //Obtengo la url de la api con el nombre del pokemon
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    //Hacemos la solicitud usando fetch
    fetch(apiURL)
    .then(res => {
        //verificar si la respuesta es exitosa
        if (res.status != 200){
            throw new Error("Pokemon no encontrado");
        }
        return res.json();
    })
    .then(data => {
        //Mostrar la info del pokemon
        displayPokemonInfo(data)
    })
    .catch(error => {
        //Mostrar un mensaje de error si no encontramos al pokemon
        pokemonInfoDiv.textContent = error.message
    })
}

//Añadimos un evento al botón de búsqueda para poder hacer la petición a la api
searchButton.addEventListener("click", () => {
    //Obtengo el nombre del pokemon del input
    // Validación que remueve los espacios antes y al final del texto
    //toLowerCase() 
    const pokemonName = pokemonNameInput.value.trim().toLowerCase(); 
    if (pokemonName){
        //si el usuario coloca por lo menos un caracteren el input, realizo la petición a la api
        pokemonNameInput.value = ""; // Limpio el input para que el usuario pueda buscar otro pokemon en el futuro
        fetchPokemonData(pokemonName) //función que hace la solicitud a la api
    }else{
        //sino, mando una advertencia
        pokemonInfoDiv.textContent = "Por favor, ingresa un nombre de pokemon"
    }

    console.log(pokemonName);
});