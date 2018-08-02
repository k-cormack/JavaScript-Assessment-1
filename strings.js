//1. Given the following sentence: Change all of the lowercase letters i, in reference to yourself, to the uppercase I
// careful not to uppercase the i in the word pair


var sentence = 'When i went to the mall i bought a pair of shoes.';

function capitalI(str) {
    var sentenceArray = str.split(" ");
    for (let i = 0; i < sentenceArray.length; i++) {
        const word = sentenceArray[i];
        if (word == 'i') {
            sentenceArray[i] = "I"
        }
    }
    return sentenceArray.join(" ")
}

console.log("String 1:", capitalI(sentence))

//2. The history of JavaScript is interesting but how many times does the letter a appear? Find a way to count both upper and lower case A's

var jsHistory = 'JavaScript, not to be confused with Java, was created in 10 days in May 1995 by Brendan Eich, then working at Netscape and now of Mozilla. JavaScript was not always known as JavaScript: the original name was Mocha, a name chosen by Marc Andreessen, founder of Netscape. In September of 1995 the name was changed to LiveScript, then in December of the same year, upon receiving a trademark license from Sun, the name JavaScript was adopted. This was somewhat of a marketing move at the time, with Java being very popular around then.';



function countA(str) {

    let sentenceCount = str.split("");

    let totalCount = 0;

    for (let i = 0; i < sentenceCount.length; i++) {
        const letter = sentenceCount[i];
        if (letter == "a" || letter == "A") {
            totalCount++
        }
    }
    return totalCount

    //totalCount = 0
    //loop
    //if char.toLowerCase() == 'a'
    //total++

    //return total
}
console.log(countA(jsHistory))




//3. Given the following sentence: Uppercase the entire word scream each time it appears in the sentence 
//I SCREAM, you SCREAM, we all SCREAM for icecream

var textScream = 'I scream, you scream, we all scream for icecream';

//var noCommas = textScream.replace(/,/g, '');

function changeScream(str) {

    let arrayScream = str.split(" ");

    for (let i = 0; i < arrayScream.length; i++) {
        const wordScream = arrayScream[i];
        if (wordScream.includes("scream")) {
            arrayScream[i] = wordScream.toUpperCase()
        }
    };

    return arrayScream.join(" ")

};



console.log(changeScream(textScream))

//create array of words
//identify the word 'scream'
//change all to uppercase
//return changed sentence
