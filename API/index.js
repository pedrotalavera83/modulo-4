function consultarPokemon(nombrePokemon) {
    fetch("https://pokeapi.co/api/v2/pokemon/" + nombrePokemon)
    .then(res =>{
        return res.json();//La respuesta de formato json la parsea a un objeto o un arreglo literal
        //Dependendiendo de la estructura de la respuesta.
    })
    .then(res =>{
        console.log(res.name);
        console.log(res.weight);
        
        
    }).catch(err => {console.log(err);
    })
}



consultarPokemon("pikachu")