/*
a) Tee JS-funktio jossa heitetään noppaa n kertaa: function rollDice(n) {}. Nopassa on kuusi sivua joissa on numerot 1-6. Funktio kerää heittojen tulokset taulukkoon ja palauttaa sen. Tee lisäksi neljä muuta funktiota joista jokainen ottaa rollDice(n) -funktion palauttaman taulukon argumentikseen. Ensimmäinen funktio (returnNums) palauttaa nopanheiton tulokset merkkijonona jossa numerot on erotettu välilyönnein. Toinen funktio (max) palauttaa suurimman arvon, kolmas funktio (min) palauttaa pienimmän arvon ja neljäs funktio (calcAvg) palauttaa kaikkien heittojen keskiarvon. Kokeile kymmenellä heitolla eli n=10. Testaa toiminta console.log:lla.
*/

// Primary function

function rollDice(throws) {
    let diceArray = [];
    for (let counter = 0; counter < throws; counter++) {
        let throwNumber = Math.floor(Math.random() * 6) + 1;
        diceArray.push(throwNumber);
    }
    return diceArray;
}

// Variable that will store the array from rollDice() function

const throwDice = rollDice(10);


// Other functions that use the array from rollDice() function

function returnNums(func) {
    let numbersAdded = func.join(' ');
    return numbersAdded;
}

function max(func) {
    let maxNumber = Math.max(...func);
    return 'The highest number is: ' + maxNumber;
}

function min(func) {
    let minNumber = Math.min(...func);
    return 'The lowest number is: ' + minNumber;
}

function calcAvg (func) {
    let numbersSum = 0;
    for (let number = 0; number < func.length; number++) {
        numbersSum += func[number];
    }
    let average = numbersSum / func.length;
    return 'Average is: ' + average;
}

console.log(throwDice);
console.log(returnNums(throwDice));
console.log(max(throwDice));
console.log(min(throwDice));
console.log(calcAvg(throwDice));