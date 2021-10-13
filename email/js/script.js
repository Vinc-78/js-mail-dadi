const arrayEmail = ["alfa.beta@gmail.it", "CarloMagno@libero.it","marco.Polo@email.it","email.giusta@ok.it"]

let trovataEmail = false;

let emailUtente = prompt ("Inserisci la tua email: ");

emailUtente=emailUtente.toLocaleLowerCase();

console.log(emailUtente);

for (let i = 0; i < arrayEmail.length; i++) {
    let elementoArray = arrayEmail[i];

    elementoArray=elementoArray.toLocaleLowerCase();

    console.log(elementoArray);

    if (elementoArray === emailUtente){ 

        trovataEmail=true;

        console.log("Il valore di trovataEmail dopo la ricerca è ", trovataEmail); 
    }
    
}

if (trovataEmail) {
    alert("Trovata email, accesso consentito");
    
} else {
    alert("Email non trovata, accesso non consentito")
}
