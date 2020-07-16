document.getElementById('genera').addEventListener("click", function() {   //Funzioni Show
    var passengers = document.getElementById('passengers');
    passengers.classList.remove("hidden");
    passengers.classList.add("show");
}
);

document.getElementById('annulla').addEventListener("click", function() { //FUnzione Hidden
    var passengers = document.getElementById('passengers');
    passengers.classList.remove("show");
    passengers.classList.add("hidden");
}
);

document.getElementById('genera').addEventListener("click", function() {  //Riporto Nome Utente
    var valore = document.getElementById('nomeutente').value;
    document.getElementById('nome-passeggero').innerHTML = valore;
}
);

document.getElementById('genera').addEventListener("click", function() {  //Creo funzione con If per prezzo
    var distanza = document.getElementById('km').value
    var eta = document.getElementById('old').value
    var prezzo = 0.21 * distanza;
    if (eta == 0) {
        var prezzoMinori = prezzo * 0.8;
        document.getElementById('costo').innerHTML = prezzoMinori.toFixed(2) + "€";
        document.getElementById('offerta').innerHTML = "Sconto Minori";
    } else if (eta == 1) {
        var prezzoNormale = prezzo;
        document.getElementById('costo').innerHTML = prezzoNormale.toFixed(2) + "€";
        document.getElementById('offerta').innerHTML = "Prezzo Normale";
    } else if (eta == 2){
        var prezzoOver = prezzo * 0.6;
        document.getElementById('costo').innerHTML = prezzoOver.toFixed(2) + "€";
        document.getElementById('offerta').innerHTML = "Sconto Over 65";
    }
}
);

document.getElementById('genera').addEventListener("click", function(){  //Genero numero random per carrozza
    var numCarrozza = Math.floor(Math.random() * 10 + 1);
    document.getElementById('carrozza').innerHTML = numCarrozza;
}
);

document.getElementById('genera').addEventListener("click", function(){ //Genero numero random per Codice CP
    var codice = Math.floor(Math.random() * (99999 - 90000 + 1)) + 90000;
    document.getElementById('ccp').innerHTML = codice;
}
);
