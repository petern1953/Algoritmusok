// bináris kereséssel keressök a 23-as számot!
// U:= 1;
// V:= N;
// L:= Hamis;
// Ciklus amíg L Hamis ÉS U <= V
// i:= (U + V) / 2;
// HA A[i] = X AKKOR
// L:= Igaz;
// HA A[i] < X AKKOR
// U:= i + 1;
// HA A[i] > X AKKOR
// V:= i - 1;
// Ciklus vége.

const numericArray = [7, 23, 65, 70, 240, 965, 1200, 1232, 1234, 2001, 2314, 5020, 6543, 799999];
let numberToFind = 240;
let startIndex = 0;
let endIndex = numericArray.length;
let found = false;

function binarySearch(arr, toFind) {
    let i;
    while ((found == false) && (startIndex <= endIndex)) {
        i = (startIndex + endIndex) / 2;
        if (numericArray[i] == toFind) {
            // console.log('found: ', numericArray[i], i)
            found = true;
            return found;
        }
        if (numericArray[i] < toFind) {
            startIndex = i + 1;
        } else {
            endIndex = i - 1;
        }
    }
    // console.log('found: ', numericArray[i], i)
    return found;
}

console.log(binarySearch(numericArray, numberToFind));