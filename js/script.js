// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo)

// chiedere all'utente il numero di km che dovrà percorrere
// chiedere all'utente la sua età
// eventualmete trasformare i dati in numero
// moltiplicare il numero dei km per 0.21€ per ottenere la spesa standard
// se l'utente è minorenne: decurtare la spesa standard del 20%, arrotondarla e stamparla
// se l'utente è over 65: decurtare la spesa del 40%, arrotondarla e stamparla
// in tutti gli altri casi, arrotondare la spesa standard e stamparla.


const userAge = parseInt ( prompt("Inserisci la tua età") );
console.log(userAge);

const userTravel = parseInt ( prompt("Inserisci i km da percorrere") );
console.log(userTravel);

let standardPrice  = userTravel * 0.21 + '€';
console.log(standardPrice);