alert("Clicca su Ok e iniziamo a giocare :) ");

let dadoPc =Math.ceil( Math.random()*6);

console.log(dadoPc);

alert(`Il valore del mio dado è: ${dadoPc}`);

let dadoUtente =Math.ceil( Math.random()*6);

console.log(dadoUtente);

alert(`Il valore del tuo dado è: ${dadoUtente}`);


if(dadoPc===dadoUtente) { 
    alert("Siamo pari clicca CTR + R per rigiocare")
}

else if(dadoPc<dadoUtente) { 
    alert("!!! HAI VINTO !!! - CTR + R per rigiocare")
}

else {
    alert(" Mi dispiace :( hai perso... CTR + R per rigiocare ")
}