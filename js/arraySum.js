// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb összegét!

const numericArray = [1232, 65, 956, 1234, 7, 36, 70, 1200];

function arraySum(arr) {
    let accumulator = 0;

    for (let i = 0; i < arr.length; i += 1) {
        accumulator += arr[i];
    }
    return accumulator;
}

console.log(arraySum(numericArray));