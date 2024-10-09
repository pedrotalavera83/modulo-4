//Selecciono los elementos del DOM que voy a utilizar
const searchInput = document.getElementById("searchInput")
const searchButton = document.getElementById("searchButton")
const countryList = document.getElementById("countryList")


function fetchAllCountries() {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data =>{//Recibo toda la lista de países en un arreglo
        countryList.innerHTML = ""
        console.log(data);
        data.forEach((country) => {
            //console.log(country.name.common);
            //Creamos la base de la card, que después nos servirá para agregar toda la información en la lista de países
            const countryCard = document.createElement("div")
            countryCard.classList.add("country-card")
            const languagesName = Object.values(country.languages).join(", ")
            const border = country.borders ? `<p>Borders: ${country.borders.join(", ")}</p>` : ""

            const currencies = Object.keys(country.currencies)
            const currencyDescription = currencies.map(key => {return `<li>${country.currencies[key].name} (${country.currencies[key].symbol})</li>`}).join("")
            console.log(currencyDescription);
            
            

            //Crear la estructura de los datos que van a desplegar en card
            coutryInfo = `
                <img src="${country.flags.png}">
                <h2>${country.name.common}</h2>
                <p>Official name: ${country.name.official}</p>
                <p>Capital(s): ${country.capital.join(", ")}</p>
                <p>Continent(s): ${country.continents.join(", ")}</p>
                <p>Population: ${country.population}</p>
                <p>Languages: ${languagesName}</p>
                ${border}
                <p>Currencies:</p>
                <ul>
                    ${currencyDescription}
                </ul>
                            `
            countryCard.innerHTML = coutryInfo
            
            countryList.appendChild(countryCard)
        })

        
    })
}


function fetchOneContry(countryName) {
    const apiURL=`https://restcountries.com/v3.1/name/${countryName}`
    
    fetch(apiURL)
    .then(res => res.json())
    .then(data =>{//Recibo toda la lista de países en un arreglo
        countryList.innerHTML = ""
        console.log(data);
        data.forEach((country) => {
            //console.log(country.name.common);
            //Creamos la base de la card, que después nos servirá para agregar toda la información en la lista de países
            const countryCard = document.createElement("div")
            countryCard.classList.add("country-card")
            const languagesName = Object.values(country.languages).join(", ")
            const border = country.borders ? `<p>Borders: ${country.borders.join(", ")}</p>` : ""

            const currencies = Object.keys(country.currencies)
            const currencyDescription = currencies.map(key => {return `<li>${country.currencies[key].name} (${country.currencies[key].symbol})</li>`}).join("")
            console.log(currencyDescription);
            
            

            //Crear la estructura de los datos que van a desplegar en card
            coutryInfo = `
                <img src="${country.flags.png}">
                <h2>${country.name.common}</h2>
                <p>Official name: ${country.name.official}</p>
                <p>Capital(s): ${country.capital.join(", ")}</p>
                <p>Continent(s): ${country.continents.join(", ")}</p>
                <p>Population: ${country.population}</p>
                <p>Languages: ${languagesName}</p>
                ${border}
                <p>Currencies:</p>
                <ul>
                    ${currencyDescription}
                </ul>
                            `
            countryCard.innerHTML = coutryInfo
            
            countryList.appendChild(countryCard)
        })

        
    })
}


//Añadimos un evento al botón de búsqueda para poder hacer la petición a la api
searchButton.addEventListener("click", () => {
    //Obtengo el nombre del país del input
    //trim(): Validación que remueve los espacios sobrantes antes y al final del texto
    //toLowerCase(): Validación para hacer la búsqueda en minúsculas independientemente de cómo lo escriba el usuario
    const countryName = searchInput.value.trim().toLowerCase(); 
    if (countryName){
        //si el usuario coloca por lo menos un caracteren el input, realizo la petición a la api
        searchInput.value = ""; // Limpio el input para que el usuario pueda buscar otro pokemon en el futuro
        fetchOneContry(countryName) //función que hace la solicitud a la api
    }else{
        //sino, mando una advertencia
        countryList.textContent = "Por favor, ingresa un nombre de un pais"
    }

    console.log(countryName);
});


//Ejecutamos la búsqueda de todos los países una vez que termine de cargar el DOM en el navegador
window.onload = fetchAllCountries