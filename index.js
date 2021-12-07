
function rechnung(num1, num2,num3,num4){
    let summe = num1 + num2;
    console.log("Erste Rechnung",num1, "+", num2,"=",summe);

    let summe2 = summe * num3;
    console.log("Zweite Rechnung", summe,"*", num3,"=", summe2);

    let summe3 = summe2 / num4;
    console.log("Die Rechnung", summe2, "/", num4, "=", summe3.toFixed(2));
}


rechnung(7, 8,9, 10);