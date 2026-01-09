/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
/**
 * Count the total number of vowels in the given string
 * @param {string} word - The string to be analyzed
 * @returns {number} - The total count of vowels
 */
function vowelsCount(word) {
  let counter = 0;

  for (let i = 0; i < word.length; i++) {
    if ("aeiou".includes(word[i].toLowerCase())) {
      counter++;
    }
  }
  return counter;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(vowelsCount(word));
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
