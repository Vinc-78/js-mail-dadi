
//dichiaro le variabili che puntano agli elementi del modulo
const emailInserita = document.querySelector("[name='email']");

const esito = document.querySelector(".esito");

const btn = document.getElementById("btn");

const reset = document.getElementById("reset");

const messOK ="Trovata email, accesso consentito"

const messKO ="Email non trovata, accesso non consentito"

btn.addEventListener("click", function () {

// creo l'arrey con le email

const arrayEmail = ["alfa.beta@gmail.it", "CarloMagno@libero.it", "marco.Polo@email.it", "email.giusta@ok.it"];

//prelevo il valore inserito in email
let emailUtente = emailInserita.value;


console.log(emailUtente);

emailUtente = emailUtente.toLocaleLowerCase();

console.log(emailUtente);

    let trovataEmail = false;



    for (let i = 0; i < arrayEmail.length; i++) {
        let elementoArray = arrayEmail[i];

        elementoArray = elementoArray.toLocaleLowerCase();

        

        if (elementoArray === emailUtente) {

            trovataEmail = true;

           
        }

    }

    console.log(trovataEmail)

    if (trovataEmail) {
        esito.textContent=messOK;
        esito.style.color="green"
        esito.style.borderColor="green";

    } else {
        esito.textContent=messKO;
        esito.style.color="red"
        esito.style.borderColor="red";


    }

});

//funzione di reset dei dati 
reset.addEventListener("click", function () {

    emailInserita.value="";
    esito.textContent="";
    esito.style.color="black"
    esito.style.borderColor="grey"

});
