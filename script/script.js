console.log(`JS OK`);

// Genera un numero casuale tra 1 e 6 per il giocatore
const tiroGiocatore = Math.floor(Math.random() * 6) + 1;
console.log(tiroGiocatore);

// Genera un numero casuale tra 1 e 6 per il computer
const tiroComputer = Math.floor(Math.random() * 6) + 1;
console.log(tiroComputer);

// Determina il vincitore
let risultato;
if (tiroGiocatore > tiroComputer) {
    risultato = "Hai vinto!";
} else if (tiroGiocatore < tiroComputer) {
    risultato = "Ha vinto il computer!";
} else {
    risultato = "Pareggio!";
}
console.log(risultato);

// Mostra i risultati in pagina
const risultatoElemento = document.createElement('p');
risultatoElemento.textContent = `Tu hai tirato un ${tiroGiocatore}. Il computer ha tirato un ${tiroComputer}. ${risultato}`;
document.body.appendChild(risultatoElemento);