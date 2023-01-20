const btn = document.querySelector(".call");
const btnC = document.querySelector(".clear");
const main = document.querySelector("main");

function callApi() {
    fetch("https://rickandmortyapi.com/api/character")
        .then(data => {
            return data.json();
        })
        .then(dataJSON => {
            showPers(dataJSON);
        })
}

function showPers(data) {
    data.results.forEach(personaje => {//Aqui es donde estan todos los personajes (data.results)
        const article = document.createRange().createContextualFragment(
            `    <article>

         <div class="image-container">
             <img src= "${personaje.image}" alt="personaje"/>
         </div>
         <h2>${personaje.name}</h2>
         <span>${personaje.status} </span>

     </article> `
        );
            main.append(article)
        })

}

btn.addEventListener("click", callApi);
btnC.addEventListener("click", function(){
    main.innerHTML = '';
})


// function getCharacters(){
//     const results = fetch("https://rickandmortyapi.com/api/character");
//     results
//     .then(response => response.json())

// }



// getCharacters(data => {
//     data.results.forEach(personaje => {//Aqui es donde estan todos los personajes (data.results)
//         const article = document.createRange().createContextualFragment(
//         `    <article>

//         <div class="image-container">
//             <img src= "${personaje.image}" alt="personaje"/>
//         </div>
//         <h2>${personaje.name}</h2>
//         <span>${personaje.status} </span>

//     </article> `
//         );
//             const main = document.querySelector("main");

//

//     });
//     btn.addEventListener("click" , mostrar())

// } );

