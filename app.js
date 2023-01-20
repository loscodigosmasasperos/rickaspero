const btn = document.querySelector("#call");
const main = document.createElement("main");
const divCont = document.createElement('div');
const body = document.querySelector("body");
const buttons = document.querySelector(".buttons")
divCont.className = "image-container";
body.append(divCont);

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
    data.results.forEach(character => {//Aqui es donde estan todos los personajes (data.results)
        const article = document.createRange().createContextualFragment(
            `    <article class = "cont-Img">

         <div class="card mb-3" style="max-width: 540px;">
         <div class="row g-0">
           <div class="col-md-4">
             <img src="${character.image}" class="img-fluid rounded-start" alt="...">
           </div>
           <div class="col-md-8">
             <div class="card-body">
               <h5 class="card-title">${character.name}</h5>
               <p class="card-text">${character.status}</p>
               <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
             </div>
           </div>
         </div>
       </div>
       

     </article> `
     
        );
     
            
            main.append(article)
            
        })
        
       
}
const limpiarBtn = document.createElement('button');


btn.addEventListener("click", function(){
    body.append(main)

    callApi()

    limpiarBtn.className = "btn btn-outline-light";
    limpiarBtn.id = "clear"
    limpiarBtn.textContent = "Limpiar"
    buttons.append(limpiarBtn)
    
   
});

limpiarBtn.addEventListener("click", function(){
    main.innerHTML = '';
    buttons.removeChild(limpiarBtn)
    body.removeChild(main);
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

