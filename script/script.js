console.log(`JS OK`);

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Stampiamo in pagina i due tiri e il risultato


// Genera un numero casuale tra 1 e 6 per il giocatore
const userChoice = Math.floor(Math.random() * 6) + 1;
console.log(userChoice);

// Genera un numero casuale tra 1 e 6 per il computer
const cpuChoice = Math.floor(Math.random() * 6) + 1;
console.log(cpuChoice);

// Determina il vincitore
let result;
if (userChoice > cpuChoice) {
    result = "Hai vinto!";
} else if (userChoice < cpuChoice) {
    result = "Ha vinto il computer!";
} else {
    result = "Pareggio!";
}
console.log(result);

// Mostra i risultati in pagina
const resultElement = document.createElement('div');
resultElement.textContent = `Tu hai tirato un ${userChoice}. Il computer ha tirato un ${cpuChoice}. ${result}`;
document.body.appendChild(resultElement);

// --------------------------------------------------------------------------------------------------------------------------------------------------------------

// Inventa una lista di email autorizzate
// Chiedi all’utente la sua email, con un piccolo form.
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.


//Array con mail autorizzate
const emailAutorizzate = ["utente1@esempio.com", "utente2@esempio.com", "utente3@esempio.com"];
//Prendo gli elementi dal DOM
const form = document.getElementById("formEmail");
const risultato = document.getElementById("emailResult");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInserita = document.getElementById("email").value;
    let accessoConsentito = false;

    for (let i = 0; i < emailAutorizzate.length; i++) {
        if (emailInserita === emailAutorizzate[i]) {
            accessoConsentito = true;
        }
    }

    if (accessoConsentito) {
        risultato.textContent = "Accesso consentito!";
    } else {
        risultato.textContent = "Accesso negato.";
    }
});
