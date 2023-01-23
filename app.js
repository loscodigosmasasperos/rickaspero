const btn = document.querySelector("#call");
const main = document.createElement("main");
const divCont = document.createElement("div");
const body = document.querySelector("body");
const buttons = document.querySelector(".buttons");
// const num = document.querySelector("#num");
// const search = document.querySelector('#filter')
const btnS = document.querySelector("#search");
const divById = document.createElement("div");
const inputById = document.createElement("input");
const btnById = document.createElement("btn");

divCont.className = "image-container";
body.append(divCont);

function callApi() {
  fetch("https://rickandmortyapi.com/api/character")
    .then((data) => {
      return data.json();
    })
    .then((dataJSON) => {
      showPers(dataJSON);
    });
  // } else {
  //     fetch("https://rickandmortyapi.com/api/character/" + inputById.value)
  //         .then(data => {
  //             return data.json();
  //         })
  //         .then(dataJSON => {
  //             showOne(dataJSON);
  //         })
  // }
}

function callById() {
  fetch("https://rickandmortyapi.com/api/character/" + inputById.value)
    .then((data) => {
      return data.json();
    })
    .then((dataJSON) => {
      showOne(dataJSON);
    });
}

function showPers(data) {
  data.results.forEach((character) => {
    //Aqui es donde estan todos los personajes (data.results)
    const article = document.createRange().createContextualFragment(
      `    <article class = "cont-Img">

         <div class="card mb-3" style="max-width: 540px;">
         <div class="row g-0">
           <div class="col-md-4">
             <img src="${character.image}" class="img-fluid rounded-start" alt="...">
           </div>
           <div class="col-md-8">
             <div class="card-body" id="textCard">
               <h5 class="card-title">${character.name}</h5>
               <p class="card-text">${character.status}</p>
               <p class="card-text"><small class="text-muted">Origen: ${character.location.name}</small></p>
             </div>
           </div>
         </div>
       </div>
       

     </article> `
    );

    main.append(article);
  });
}

function showOne(data) {
  const divOne = document.createElement("div");
  const imgOne = document.createElement("img");
  const name = document.createElement("p");
  const url = `${data.image}`;
  name.textContent = `${data.name}`;
  name.className = "oneName";
  imgOne.src = url;
  imgOne.className = "oneImage";
  divOne.append(name);
  divOne.append(imgOne);
  main.append(divOne);
  limpiarBtn.className = "btn btn-outline-light";
  limpiarBtn.id = "clear";
  limpiarBtn.textContent = "Limpiar";
}

const limpiarBtn = document.createElement("button");

btn.addEventListener("click", function () {
  body.append(main);

  callApi();

  limpiarBtn.className = "btn btn-outline-light";
  limpiarBtn.id = "clear";
  limpiarBtn.textContent = "Limpiar";
  buttons.append(limpiarBtn);
  btn.disabled = true;
  btnS.disabled = true;
});

btnS.addEventListener("click", function () {
  cleanById.className = "btn btn-outline-light";
  cleanById.id = "clear";
  cleanById.textContent = "Limpiar";
  btn.disabled = true;
  divById.className = "form";
  inputById.type = "number";
  inputById.id = "num";
  inputById.required = "required";
  btnById.className = "btn btn-outline-light";
  btnById.id = "filter";
  btnById.textContent = "prueba ";
  divById.append(inputById, btnById);
  body.append(divById);
  buttons.append(cleanById);
  btnS.disabled = true;
});

btnById.addEventListener("click", () => {
  body.append(main);
  callById();

  inputById.value = "";
});
limpiarBtn.addEventListener("click", function () {
  main.innerHTML = "";
  btn.disabled = false;
  btnS.disabled = false;
  buttons.removeChild(limpiarBtn);
  body.removeChild(main);
});
const cleanById = document.createElement("button");
cleanById.addEventListener("click", () => {
  btnS.disabled = false;
  btn.disabled = false;
  body.removeChild(divById);
  buttons.removeChild(cleanById);
  body.removeChild(main);
});

// search.addEventListener('click', function () {
//     body.append(main);
//     buttons.append(limpiarBtn);
//     callApi()
//     num.value = "";
// });

// btnS.addEventListener('click', function () {
//     const contButn = document.createRange().createContextualFragment(
//         `    <div class="form">
//         <br>    <input type="number" id="num">
//         <button type="submit" class="btn btn-outline-light" id="filter">Buscar por ID</button>

//     </div>
//         `
//     );
// body.appendChild(contButn)

// })

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
