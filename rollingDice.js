var diceResults = [];
var n = process.argv.slice(2);

function diceNumber(n) {
  while (Number(n) > 0) {
    diceResults.push(rollDice());
    n--;
  }
}

function rollDice() {
  return Math.floor(Math.random()*6);
}
diceNumber(n);
console.log("Rolled " + n + " dice: " + diceResults);
