let inputString = "sveiki";

function reverseString(str) {
    return str.split('').reverse().join(''); // Split string into array, reverse, and join back
}

console.log("Oriģināls: " + inputString);
console.log("Apgriezts: " + reverseString(inputString)); // Pass inputString to the function


// While Loop
// let inputString = "sveiki";

// function reverseString(str) {
//     let reversed = "";
//     let i = str.length - 1;
//     while (i >= 0) {
//         reversed += str[i];
//         i--;
//     }
//     return reversed;
// }

// console.log("Oriģināls: " + inputString);
// console.log("Apgriezts: " + reverseString(inputString));