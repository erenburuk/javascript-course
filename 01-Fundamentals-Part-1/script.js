/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";
let first = 'jonas'
let firstNamePerson
let first_name_person

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $funtion = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);



let javascriptIsFun = true;
console.log(javascriptIsFun);

//console.log(typeof true);
console.log(typeof javascriptIsFun);
//console.log(typeof 23);
//console.log(typeof 'Jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;

console.log(year);
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthYear = 1991;
//birthYear = 1990;
//const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Buruk';
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);



const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


////////////////////////////////////
// Coding Challenge #1


Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀

let weightMark = 78;
let weightJohn = 92;

let heightMark = 1.69;
let heightJohn = 1.95;

let BMI_Mark = weightMark / (heightMark ** 2);
let BMI_John = weightJohn / (heightJohn ** 2);
console.log(BMI_Mark, BMI_John);

let markHigherBMI = BMI_Mark > BMI_John;
console.log(markHigherBMI);

weightMark = 95;
weightJohn = 85;

heightMark = 1.88;
heightJohn = 1.76;

BMI_Mark = weightMark / (heightMark ** 2);
BMI_John = weightJohn / (heightJohn ** 2);
console.log(BMI_Mark, BMI_John);

markHigherBMI = BMI_Mark > BMI_John;
console.log(markHigherBMI);


const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');
// `` <-- backticks
console.log(`String
multiple
lines`);


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1991;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


////////////////////////////////////
// Coding Challenge #2


Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;


// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

BMI_Mark = massMark / heightMark ** 2;
BMI_John = massJohn / (heightJohn * heightJohn);

if (BMI_Mark > BMI_John) {
    console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${BMI_Mark}) is higher than John's (${BMI_John})!`);
} else {
    console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${BMI_John}) is higher than Mark's (${BMI_Mark})!`);
}


//type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); //Number fonksiyonu sadece o anlık sayıya dönüştürüyor, orijinal type aynı kalıyor
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')); //sayı olmadığını anlıyor NaN = not a number
console.log(typeof NaN); //NaN type'ı number

console.log(String(23), 23); //console'da renk beyazsa değer string demek

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3); //string çıkıyor
console.log('23' - '10' - 3);
console.log('23' / '2');


let n = '1' + 1; // 11
n = n - 1; // 10
console.log(n);

// 5 falsy values 0, '', undefined, null, NaN

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean('')); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('Jonas')); //true
console.log(Boolean({})); //true

const money = 0;
if (money) { //0 falsy value olduğu için else block execute ediyor
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height; // height undefined yani falsy, else çalışır
height = 0; // burda bug oluyor defined olmasına rağmen 0 falsy olduğu için undefined sayılıyor ve else block çalışıyor
if (height) {
    console.log('YAY! Height is defined');
} else {
    console.log('Height is UNDEFINED');
}

const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 => FALSE
    console.log('Cool! 23 is an amazing number!');
} else if (favourite === 7) {
    console.log('8 is also a cool number');
} else if (favourite === 9) {
    console.log('9 is also a cool number');
} else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...');
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀


// let avgScoreDolphins = (96 + 108 + 89) / 3;
// let avgScoreKoalas = (88 + 91 + 110) / 3;

// let avgScoreDolphins = (97 + 112 + 101) / 3;
// let avgScoreKoalas = (109 + 95 + 123) / 3;

// let avgScoreDolphins = (97 + 112 + 101) / 3;
// let avgScoreKoalas = (109 + 95 + 106) / 3;

if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
    console.log(`Dolphins (${avgScoreDolphins}) won the game against Koalas (${avgScoreKoalas})!`);
} else if (avgScoreDolphins === avgScoreKoalas && avgScoreDolphins >= 100 && avgScoreKoalas >= 100) {
    console.log(`The game draw! Dolphins (${avgScoreDolphins}) and Koalas (${avgScoreKoalas})!`);
} else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
    console.log(`Koalas (${avgScoreKoalas}) won the game against Dolphins (${avgScoreDolphins})!`);
} else {
    console.log(`Both Dolphins (${avgScoreDolphins}) and Koalas (${avgScoreKoalas}) did not win the game!`)
}


const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}

if (day === 'monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day === 'tuesday') {
    console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
    console.log('Write code examples');
} else if (day === 'friday') {
    console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
} else {
    console.log('Not a valid day!');
}

3+4
1991
true && false && !false  all expressions

if (23 > 10) {
    const str = '23 is bigger';
}
const me = 'Eren';
console.log(`I'm ${2037 - 1991} years old ${me}`);


const age = 15;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧'); // if else statement in one line, first part is if and second line is else part

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
    drink2 = 'wine 🍷';
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀


const bill = 400;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/

