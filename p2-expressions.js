/*
    CIT 281 Project 2
    Name: Abby Gregg
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
let result = "";

for (let i = 0; i < getRandomInteger(5, 26); i++) {
    result += alphabet[getRandomInteger(1,alphabet.length-1)];
}

console.log(result);

//returns single random lowercase letter
const getRandomLetter = function() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[Math.floor(Math.random() * alphabet.length)]

}

for (let i = 0; 1 < getRandomLetter(5, 26); i++) {
    result += alphabet[getRandomLetter(1,alphabet.length-1)];
}

console.log (getRandomLetter());

const getRandomString = function(minLength, maxLength);{
    return Math.random().toString(20).substr(2, length);

}

console.log(getRandomString());

const getSortedString = function(str){return str.split("").sort().join("");}
