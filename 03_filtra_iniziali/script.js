/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
/**
 * Filters a list of names to find those starting with a specific character.
 * @param {string} initial - The character to search for.
 * @param {string[]} nameslist - An array of strings to be filtered.
 * @returns {string[]} - A new array containing only the names that start with the given initial.
 */
function findNamesWithInitial(initial, nameslist) {
  const namesWithInitial = [];
  for (let i = 0; i < nameslist.length; i++) {
    if (initial === nameslist[i][0]) {
      namesWithInitial.push(nameslist[i]);
    }
  }
  return namesWithInitial;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(findNamesWithInitial("A", names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
