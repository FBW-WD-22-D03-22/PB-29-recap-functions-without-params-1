const ersteKonstante = 7;
const zweiteKonstante = 8;
const dritteKonstante = 9;
const vierteKonstante = 10;


function berechnung() {
    let adition = ersteKonstante + zweiteKonstante;
    let multiplikation = adition * dritteKonstante;
    let division = multiplikation / vierteKonstante;
    return division;
}

let resultat = berechnung();
console.log(resultat);