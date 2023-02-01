// cambia direttamente l'h1
// document.getElementById("h1").innerHTML = "Your new e-commerce";
function changeH1(){
    document.getElementById("h1").innerHTML = "Your new e-commerce";
}
changeH1();

// cambio il background 
// document.body.style.backgroundColor = "lightgray";
function changeBackgroundColor(){
    document.body.style.backgroundColor = "lightgray";
}
changeBackgroundColor();

// funzione per cambiare indirizzo (address bar) 
// HO LASCIATO LA FUNZIONE SOTTO FORMA DI COMMENTO, PERCHE' NEL MOMENTO IN CUI VADO A FARE IL RELOAD DELLA PAGINA, LA VECCHIA PAGINA NON LA TROVA PIU'. PUSHSTATE() E' UN METODO CHE SI USA CON LE API
// function changeAddressBar(){
//     window.history.pushState("object or string", "Title", "/new-url");
// }
// changeAddressBar();

// Funzione per aggiungere una classe css ad ogni link amazon della tabella
// Inizialmente ho provato ad utilizzare il getElementsByTagName, ma la console mi dava errore e anche dopo aver cercato su internet non ne sono riuscita a venire a capo.
// Quindi ho optato facendo più funzioni con id diversi e utilizzando il getElementById, sicuramente non è il livello ottimale (ne sono consapevole), ma era l'unico modo in questo momento con cui mi veniva fuori il risultato richiesto dall'esercizio
function addClass(){
    let element = document.getElementById("my-link");
    element.classList.add("change-css-javascript");
}
addClass();

function addClassSecond(){
    let second = document.getElementById("second-link");
    second.classList.add("change-css-javascript");
}
addClassSecond();

function addClassThird(){
    let second = document.getElementById("third-link");
    second.classList.add("change-css-javascript");
}
addClassThird();

function addClassFourth(){
    let second = document.getElementById("fourth-link");
    second.classList.add("change-css-javascript");
}
addClassFourth();

function addClassFifth(){
    let second = document.getElementById("fifth-link");
    second.classList.add("change-css-javascript");
}
addClassFifth();





// Funzione per modificare la visibilità di una immagine
// In questo caso, la seconda immagine partendo da sinistra non si vede, perchè ho cambiato la visibilità in hidden tramite javascript

// function showImage(){
//     let img = document.getElementById("my-image");
//     img.style.visibility = "hidden";
// }
// showImage();
// Ho trovato un ulteriore modo:
/* In questo caso lavoro con gli eventi, nel momento in cui clicco (click, è un evento) sulla seconda immagine, questa sparisce
*/
document.addEventListener("click", (event) => {
    let img = document.getElementById("my-image");
    img.style.visibility ="hidden";
})


// Funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata
// function changeRandomColor(){
//     // let randomColor = "#" + Math.floor((Math.random() * 16777215).toString(16));
//     let randomColor = Math.floor(Math.random() * 255);
//     let link = document.getElementById("first-price");
//     link.style.color = randomColor;
// }
// changeRandomColor();
// window.onload = function random(){
//     let price = document.getElementById("first-price");
//     let generateColor = new Array("green", "red", "blue");
//     let randomColor = generateColor[Math.floor(generateColor.length * Math.random())];

//     for(let i = 0; i < price.length; i++){
//         price[i].style.color = randomColor;
//     }
// }
// Sono riuscita a creare un evento che cambi ad ogni mousover il colore al prezzo, fa riferimento però solo al primo prezzo, perchè ho utilizzato l'id
let color = ["#0000FF", "#A52A2A", "#ffdc40"];
document.getElementById("first-price").addEventListener("mouseover", function(){
    let randomColor = color[Math.floor(Math.random() * color.length)];
    let title = document.getElementById("first-price");
    title.style.color = randomColor;
})