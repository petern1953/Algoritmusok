// keressük a tömbben a 23-as érték előfordulásainak számát!

const numericArray = [1232, 23, 65, 956, 23, 1234, 7, 23, 36, 70, 1200, 23, 23];
let numberToFind = 23;
let numberOf23s = 0;

function linearRepeatedSearch(arr, toFind) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === toFind) {
            numberOf23s += 1;
        }
    }
    return numberOf23s;
}

console.log(linearRepeatedSearch(numericArray, numberToFind));