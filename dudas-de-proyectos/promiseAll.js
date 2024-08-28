fetch("https://pokeapi.co/api/v2/pokemon?limit=5&offset=0")
    .then(res => res.json())
    .then(data => {
        let urlArray = []//url de los pokemones
        let arrayPromise = []//url de las peticiones de cada uno de los pokemones
        data.results.forEach(pokemon => {
            urlArray.push(pokemon.url)
        });
        //console.log(urlArray);


        urlArray.forEach(url => {
            arrayPromise.push(fetch(url).then(res => res.json()).catch(error => console.log(error)
            ))
        });
        //console.log(arrayPromise);
        //Espero el resultado de un arreglo de promesas
        return Promise.all(arrayPromise)
    })
    .then(
        arrayRes => {
            arrayRes.forEach(pokemon => {
                console.log(pokemon.name);
                console.log(pokemon.weight);
                console.log(pokemon.sprites.front_default);
                console.log("-----------------------------------");
                
                
            });


        }
    )
    .catch(error => console.log(error))
