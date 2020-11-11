// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!

const numericArray = [1232, 65, 956, 1234, 7, 23, 36, 70, 1200];
let numberToFind = 23;
let found = false;

function linearSearch(arr, toFind) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] == toFind) {
            found = true;
            break;
        }
    }
    return found;
}

console.log(linearSearch(numericArray, numberToFind));