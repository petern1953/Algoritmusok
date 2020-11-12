// 16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. 
// Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét,
// és descartes szorzatát. Írassuk ki az új tömböket!

const numericArrayA = [1232, 23, 65, 231, 956, 23, 1234, 70];
const numericArrayB = [23, 36, 70, 123, 231, 1200, 23, 231];
console.log('ArryA: ', numericArrayA);
console.log('ArryB: ', numericArrayB);

function AintersectB(arr1, arr2) {
    const intersectArr = [];
    const arr1copy = arr1.slice();
    const arr2copy = arr2.slice();

    for (let i = 0; i < arr1copy.length; i += 1) {
        for (let j = 0; (j < arr2copy.length); j += 1) {
            if ((arr1copy[i] === arr2copy[j]) && arr1copy[i] != null && arr2copy[j] != null) {
                intersectArr.push(arr1copy[i]);
                arr1copy[i] = null;
                arr2copy[j] = null;
            }
        }
    }
    return intersectArr;
}

console.log('Intersect: ', AintersectB(numericArrayA, numericArrayB));


function AunioB(arr1, arr2) {
    const unioArr = [];

    for (let i = 0; i < arr1.length; i += 1) {
        unioArr.push(arr1[i]);
    }
    for (let j = 0; j < arr2.length; j += 1) {
        unioArr.push(arr2[j]);
    }
    return unioArr;
}

console.log('Unio: ', AunioB(numericArrayA, numericArrayB));

function AdiffB(arr1, arr2) {
    const diffArr = arr1.slice();

    for (let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            if (arr1[i] === arr2[j]) {
                diffArr.splice(i, 1);
            }
        }
    }
    return diffArr;
}

console.log('Diff: ', AdiffB(numericArrayA, numericArrayB));

function ADprodB(arr1, arr2) {
    const DprodArr = [];

    for (let i = 0; i < arr1.length; i += 1) {
        for (let j = 0; j < arr2.length; j += 1) {
            DprodArr.push([arr1[i], arr2[i]]);
        }
    }
    return DprodArr;
}

console.log('AprodB: ', ADprodB(numericArrayA, numericArrayB));