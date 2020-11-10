// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb átlagát!

const numericArray = [1232, 65, 956, 1234, 7, 36];

function arrayMeanValue(arr) {
    if (arr.length == 0) {
        console.log('üres tömb');
        return undefined;
    }
    let accumulator = 0;

    for (let i = 0; i < arr.length; i += 1) {
        accumulator += arr[i];
    }
    return accumulator / arr.length;
}

console.log(arrayMeanValue(numericArray));