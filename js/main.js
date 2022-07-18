// Visualizzare in pagina 5 numeri casuali. /
// Da lì parte un timer di 30 secondi. /
// Dopo 30 secondi l’utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, 
// il software dice quanti e quali dei numeri da indovinare 
// sono stati individuati.

const selectedNumber = [];

const RANDOM_NUMBER = 5;

const maxValue = 100;

let randomNumber;

let screenNumber = document.getElementById('screen-number');

let insertNumber = [];

// creo array random
for (let i = 0; i < RANDOM_NUMBER; i++) {
    randomNumber = getUniqueNumber(selectedNumber, 1, maxValue);

    selectedNumber.push(randomNumber);
}

screenNumber.innerHTML = (selectedNumber);

// mostro i numeri casuali
setTimeout(function () {

    let containerDom = document.getElementById('containerRandomNumbers');
    containerDom.classList.add('hidden');

}, 3000)

setTimeout(function () {
    // avvio i prompt
    for (let i = 0; i < selectedNumber.length; i++) {

        insertNumber.push(parseInt(prompt('inserisci il numero che hai memorizzato')));
    }

    

    commonsNumbers = [];

    let score = document.getElementById('score');

    

    // confronto gli array  
    for (let i = 0; i < selectedNumber.length; i++) {

        if (insertNumber.includes(selectedNumber[i])) {
            commonsNumbers.push(selectedNumber[i]);
        }
        
    }

    score.innerHTML = (`Hai indovinato ${commonsNumbers.length} numeri ${commonsNumbers}`);
    


}, 3050)

// creo numeri casuali
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// numeri casuali unici
function getUniqueNumber(usedNumberList, min, max) {

    let validNumber = false;

    let createdRandomNumber;

    while (validNumber == false) {
        createdRandomNumber = getRandomNumber(min, max);

        if (usedNumberList.includes(createdRandomNumber) == false) {
            validNumber = true;
        }
    }

    return createdRandomNumber;

}