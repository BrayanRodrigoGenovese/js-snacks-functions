/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function nameInitials(namesList) {
  const initials = [];
  for (let i = 0; i < namesList.length; i++) {
    initials.push(namesList[i][0]);
  }
  return initials;
}

console.log(typeof nameInitials(names));
// Invoca la funzione qui e stampa il risultato in console
console.log(nameInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
