/*let scoremodule = (function() {
    let score2 = 0;

    function changeBy(val) {
        score2 += val;
    }
    return {
        increment: function() {
            changeBy(1);
        },
        decrement: function() {
            changeBy(-1);
        },
        getScore: function() {
            return score2;
        }
    };
})();
*/

let dicemodule = (function() {
    

    function rollDice (throws) {
         diceArray = [];
        for (let counter = 0; counter < throws; counter++) {
            let throwNumber = Math.floor(Math.random() * 6) + 1;
            diceArray.push(throwNumber);
    }
    return {
        rollDice: function() {
            primaryArray = rollDice(throws);
            return primaryArray;
        },
        returnNums: function() {
            return primaryArray.join(' ');
        },
        max: function() {
            return Math.max(...primaryArray);
        },
        min: function() {
            return Math.min(...primaryArray);
        },
        primaryArray: function () {
            return primaryArray;
        }
    };
})();

console.log(dicemodule.returnNums);