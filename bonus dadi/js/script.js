// variabili che puntano al HTML

const play = document.getElementById("btn");

const dadoPC = document.querySelector(".dadoPC");

const dadoUtente =document.querySelector(".dadoUtente");

const esito = document.querySelector(".esito")

esito.textContent=""; // azzero il risultato al caricamento della pagina

//inizio funzione play

play.addEventListener("click", function(){

    //creo due variabili per assegnare i valori random dei dadi

    let risultatoPc =Math.ceil( Math.random()*6);

    dadoPC.innerHTML = risultatoPc;

    let risultatoUtente =Math.ceil( Math.random()*6);

    dadoUtente.innerHTML = risultatoUtente;

    
  
    //messaggi di errore e output dopo verifica

    const messPari =" Siamo pari :)"

    const messVinto ="!!! HAI VINTO !!!"

    const messPerso ="Mi dispiace :( "

    if(risultatoUtente===risultatoPc) { esito.textContent=messPari;}

    if(risultatoPc<risultatoUtente) {esito.textContent=messVinto;}

    if (risultatoPc>risultatoUtente) { esito.textContent=messPerso;}



});