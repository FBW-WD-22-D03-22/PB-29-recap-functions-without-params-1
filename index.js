const ersteZahl=7;
const zweiteZahl=8;
const dritteZahl=9;
const vierteZahl=10;
let ergebnis

function ersteZwei() {
    
    ergebnis=ersteZahl+zweiteZahl;
    ergebnis=ergebnis*dritteZahl;
    ergebnis=ergebnis/vierteZahl;
  return ergebnis;

}
let ausgabe=ersteZwei();

console.log(ausgabe)