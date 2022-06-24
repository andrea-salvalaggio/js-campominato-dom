/** Consegna 1 **/
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
// ed emetto un messaggio in console con il numero della cella cliccata.


/** Consegna 2 **/
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
// Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// Richiamo il container della griglia tramite il suo id
const wrapContainer = document.getElementById('container-wrapper');

const blackList = [];

// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
const playButton = document.querySelector('.play-button');

// Creo una funzione per generare la griglia (al click del play-button)
playButton.addEventListener('click', function () {

    // Svuoto il contenitore della griglia
    wrapContainer.innerHTML = '';

    for (let i = 0; i < 15; i++) {
        const newRandomNumber = generateRandomNumber(blackList, 1, 100);
        console.log(newRandomNumber);
    }

    // Creo un ciclo per generare la griglia
    for (let i = 1; i < 101; i++) {
        const newSquare = createNewSquare();

        // Aggiungo l'indice (i numeri) dentro al quadrato
        newSquare.innerHTML = i;

        // Aggiungo il click al quadrato
        newSquare.addEventListener('click', function () {

            if () {
                newSquare.classList.add('bomb');
            } else {
                newSquare.classList.add('active');
            }
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
function generateRandomNumber(blackList, min, max) {
    let randomNumber;
    let validNumber = false;

    while (validNumber === false) {
        randomNumber = Math.floor(Math.random() * (max - min) + min);
        if (!blackList.includes(randomNumber)) {
            validNumber = true;
        }
    }
    return randomNumber;
}