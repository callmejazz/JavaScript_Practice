// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Challenge Two
const johnMass = 78;
const johnHeight = 1.69;
const markMass = 92;
const markHeight = 1.95;

const BMIJohn = johnMass / (johnHeight * johnMass);
const BMIMark = markMass / markHeight ** 2;
const markHigherBMI = BMIMark > BMIJohn;

//console.log(markHigherBMI)

if(BMIMark > BMIJohn){
    console.log(`Mark's (${BMIJohn}) is higher than John (${BMIMark})!` )
}else{
    console.log(`John's BMI (${BMIJohn}) is lower than Mark's (${BMIMark})` )
}