// cambia direttamente l'h1
document.getElementById("h1").innerHTML = "Your new e-commerce";

// cambio il background 
document.body.style.backgroundColor = "lightgray";

// funzione per cambiare indirizzo

// funzione per aggiungere una classe css ad ogni link amazon della tabella
function addClass(){
    let add = document.getElementsByTagName("a");
    add.classList.add("my-links");
    // nel caso in cui volessi rimuovere una classe 
    // add.classList.remove("my-links");
}

// funzione per aggiungere/togliere una classe CSS alle immagini
// In questo modo vado a rendere l'immagine invisibile
document.getElementsByTagName("img").onclick = function(){
    document.getElementsByClassName("img").style.visibility = "hidden"
}

// Nel caso in cui volessi aggiungere o rimuovere l'invisibilità di una immagine tramite l'aggiunta di una classe, dovrei utillizare classList
function addAndRemoveClass(){
    let agg = document.getElementsByClassName("img");
    agg.classList.add("visible-class");

    let remo = document.getElementsByClassName("img");
    agg.classList.remove("hidden-class");
}


// funzione per cambiare il colore del prezzo di ogni prodotto in uno differente, ogni volta che viene invocata