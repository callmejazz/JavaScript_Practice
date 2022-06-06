// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 100) / 3;

console.log(scoreDolphins);
console.log(scoreKoalas);

if(scoreDolphins > scoreKoalas){
    console.log(`The Dolphins win! `)
}else if(scoreKoalas > scoreDolphins){
    console.log(`The Koalas win`)
}else if (scoreDolphins == scoreKoalas){
console.log(`Both teams win!`)
}

