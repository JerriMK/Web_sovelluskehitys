/*
a) Tee JS-funktio jossa heitetään noppaa n kertaa: function rollDice(n) {}. Nopassa on kuusi sivua joissa on numerot 1-6. Funktio kerää heittojen tulokset taulukkoon ja palauttaa sen. Tee lisäksi neljä muuta funktiota joista jokainen ottaa rollDice(n) -funktion palauttaman taulukon argumentikseen. Ensimmäinen funktio (returnNums) palauttaa nopanheiton tulokset merkkijonona jossa numerot on erotettu välilyönnein. Toinen funktio (max) palauttaa suurimman arvon, kolmas funktio (min) palauttaa pienimmän arvon ja neljäs funktio (calcAvg) palauttaa kaikkien heittojen keskiarvon. Kokeile kymmenellä heitolla eli n=10. Testaa toiminta console.log:lla.
*/

function rollDice(throws) {
    let diceArray = [];
    for (let counter = 0; counter <= throws; counter++) {
        let throwNumber = Math.floor(Math.random() * 6) + 1;
        diceArray.push(throwNumber);
    }
    return diceArray;
}
const firstThrow = rollDice(6);
console.log(firstThrow)
