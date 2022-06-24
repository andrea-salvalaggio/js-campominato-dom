/** Consegna 1 **/
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.


/** Consegna 2 **/
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

// Richiamo il container della griglia tramite il suo id
const wrapContainer = document.getElementById('container-wrapper');

// Creo un array vuoto per i numeri randomici
const blackList = [];

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const playButton = document.querySelector('.play-button');

// Creo una funzione per generare la griglia (al click del play-button)
playButton.addEventListener('click', function () {

    // Svuoto il contenitore della griglia
    wrapContainer.innerHTML = '';

    // Creo un ciclo per generare la griglia
    for (let i = 1; i < 101; i++) {
        const newSquare = createNewSquare();

        const newRandomNumber = generateRandomNumber(blackList, 1, 100);

        // Aggiungo l'indice (i numeri) dentro al quadrato
        newSquare.innerHTML = i;

        // Aggiungo il click al quadrato
        newSquare.addEventListener('click', function () {
            newSquare.classList.add('active');

            // Stampo in console il numero del quadrato cliccato
            console.log(`Hai cliccato il numero ${i}`);
        })

        // Aggiungo la griglia al parent
        wrapContainer.append(newSquare);
    }
})

// Creo una funzione per generare i quadrati
function createNewSquare() {
    const currentSquare = document.createElement('div');
    currentSquare.classList.add('square');
    return currentSquare;
}

// Creo una funzione per generare i numeri randomici
function generateRandomNumber(blacklist, min, max) {

    let randomNumber;
    let validNumber = false;

    while (!validNumber === false) {
        randomNumber = Math.floor(Math.random() * (max - min) + min);
        if (!blacklist.indexOf(randomNumber)) {
            validNumber = true;
        }
    }

    return randomNumber;

}


