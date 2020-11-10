// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legnagyobb elemét!

const numericArray = [1232, 65, 956, 1234, 7, 36];

function biggestElement(arr) {
    let biggest = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] > biggest) {
            biggest = arr[i];
        }
    }
    return biggest;
}

console.log(biggestElement(numericArray));