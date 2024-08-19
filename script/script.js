console.log(`JS OK`);

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