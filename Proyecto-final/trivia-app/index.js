//Selecciono los elementos del DOM que voy a utilizar
const numberQuestions = document.getElementById("numberQuestions")
const categoryQuestions = document.getElementById("categoryQuestions")
const difficultyQuestions = document.getElementById("difficultyQuestions")
const typeQuestions = document.getElementById("typeQuestions")
const search_Button = document.getElementById("searchButton")
const contenedorPreguntas = document.getElementById("contenedorPreguntas")








function fetchPreguntas(numeroPreguntas, categoriaPregunta, dificultadPregunta, tipoPregunta){
    console.log(numeroPreguntas);
    console.log(categoriaPregunta);
    console.log(dificultadPregunta);
    console.log(tipoPregunta);
    const apiURL=`https://opentdb.com/api.php?amount=${numeroPreguntas}${categoriaPregunta==''?'':`&category=${categoriaPregunta}`}${dificultadPregunta=="Any Difficulty"?'':`&difficulty=${dificultadPregunta}`}${tipoPregunta=="Any Type"?'':`&type=${tipoPregunta}`}`
    console.log(apiURL)
    fetch(apiURL)
    .then(res =>{
        //Verificamos respuesta exitosa
        if (res.status != 200){
            throw new Error("Error en la petición")
        }
        return res.json();
    })
    
    .then(data =>{
        console.log(data);
        contenedorPreguntas.innerHTML=''
        data.results.forEach((pregunta) => {
            const cardPregunta = document.createElement("div")
            cardPregunta.classList.add("card")
            cardPregunta.innerHTML = `
            <h3>${pregunta.question}</h3>
            <ul>
                <li>Opción 1: ${pregunta.correct_answer}</li>
                <li>Opción 2: ${pregunta.incorrect_answers[0]}</li>
                <li>Opción 3: ${pregunta.incorrect_answers[1]}</li>
                <li>Opción 4: ${pregunta.incorrect_answers[2]}</li>
            </ul>
            `
            contenedorPreguntas.appendChild(cardPregunta)
        })
    })
    .catch(error =>{
        contenedorPreguntas.textContent = error.message
    })

}





search_Button.addEventListener("click", () => {

    const numeroPreguntas = numberQuestions.value; 
    const categoriaPregunta = categoryQuestions.value; 
    const dificultadPregunta = difficultyQuestions.value; 
    const tipoPregunta = typeQuestions.value;
    
    if (numeroPreguntas){
        //si el usuario coloca por lo menos un caracteren el input, realizo la petición a la api

numberQuestions.value = "10";
categoryQuestions.value = "";
difficultyQuestions.value = "Any Difficulty";
typeQuestions.value = "Any Type";

        fetchPreguntas(numeroPreguntas, categoriaPregunta, dificultadPregunta, tipoPregunta) //función que hace la solicitud a la api
    }else{
        //sino, mando una advertencia
        contenedorPreguntas.textContent = "Por favor, ingresa el numero de preguntas a responder"
    }


});














