// 16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. 
// Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét,
// és descartes szorzatát. Írassuk ki az új tömböket!

const numericArrayA = [1232, 23, 65, 23, 956, 23, 1234, 7];
const numericArrayB = [23, 36, 70, 123, 231, 1200, 23, 23];

function AintersectB(arr1, arr2) {
    const intersectArr = [];

    for (let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            if (arr1[i] === arr2[j]) {
                intersectArr.push(arr1[i]);
            }
        }
    }
    return intersectArr;
}

function AunioB(arr1, arr2) {
    const unioArr = [];

    for (let i = 0; i < arr1.length; 1 += 1) {
        unioArr.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j += 1) {
        unioArr.push(arr2[j]);
    }
    return unioArr;
}

function AdiffB(arr1, arr2) {
    const diffArr = arr1.slice();

    for (let i = 0; i < arr.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            if (arr1[i] === arr2[j]) {
                diffArr.splice(i, 1);
            }
        }
    }
    return diffArr;
}

function ADprodB(arr1, arr2) {
    const DprodArr = [];

    for (let i = 0; i < arr.length; i += 1) {
        arr[i] % 2 ? odd.push(arr[i]) : even.push(arr[i]);
    }
    return [even, odd];
}

const result = getEvenAndOddNumbersApart(numericArray);
console.log('Párosak: ', result[0], 'Páratlanok: ', result[1]);