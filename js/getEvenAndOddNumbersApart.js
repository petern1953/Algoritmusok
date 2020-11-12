// 15. Adott egy tetszőleges pozitív egész számokat tartalmazó tömb.
// Válogassuk szét külön egy even(páros), és odd(páratlan) nevezetű tömbbe a páros, és páratlan számokat!
// Írjuk ki a 2 tömböt!

const numericArray = [1232, 23, 65, 23, 956, 23, 1234, 7, 23, 36, 70, 123, 231, 1200, 23, 23];

function getEvenAndOddNumbersApart(arr) {
    const even = [];
    const odd = [];

    for (let i = 0; i < arr.length; i += 1) {
        arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i]);
    }
    return [even, odd];
}

const result = getEvenAndOddNumbersApart(numericArray);
console.log('Párosak: ', result[0], 'Páratlanok: ', result[1]);