/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
function advancedGreeting(name) {
  const today = new Date();
  const actualHour = today.getHours();

  if (actualHour > 17) {
    return "Buonasera " + name;
  } else if (actualHour > 13) {
    return "Buon pomeriggio " + name;
  } else {
    return "Buongiorno " + name;
  }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(advancedGreeting(name));
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
