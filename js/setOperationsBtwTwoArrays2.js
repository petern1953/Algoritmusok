// 16. Adott két azonos elemszámú, csak egész számokat tartalmazó tömb. 
// Külön tömbökbe készítsük el a két tömb: metszetét, unióját, különbségét,
// és descartes szorzatát. Írassuk ki az új tömböket!

// a függvények rendezett halmazokon működnek
// amennyiben nem azok, a korábbi advancedBubbleSort függvénnyel rendezni kell őket

// const numericArrayA = [12, 23, 65, 231, 231, 956, 1200, 2300, 11234, 70000];
// const numericArrayB = [23, 36, 70, 123, 231, 231, 1200, 1223, 1231, 1232, 2300, 2065];
const numericArrayA = [7, 12, 12, 15, 23];
const numericArrayB = [5, 12, 23, 36, 77];

function AintersectB(arr1, arr2) {
    const intersectArr = [];
    const arr1copy = arr1.slice();
    const arr2copy = arr2.slice();

    let i = 0;
    let j = 0;
    while ((i < arr1copy.length) && (j < arr2copy.length)) {
        let eset = arr1copy[i] - arr2copy[j];
        if (eset == 0) {
            intersectArr.push(arr1copy[i]);
            i += 1;
            j += 1;
        } else if (eset < 0) {
            i += 1;
        } else {
            j += 1;
        }
    }

    return intersectArr;
}

console.log('Intersect: ', AintersectB(numericArrayA, numericArrayB));

function AunioB(arr1, arr2) {
    const unioArr = [];
    const arr1copy = arr1.slice();
    const arr2copy = arr2.slice();

    let i = 0;
    let j = 0;
    while ((i < arr1copy.length) && (j < arr2copy.length)) {
        let eset = arr1copy[i] - arr2copy[j];
        if (eset == 0) {
            unioArr.push(arr1copy[i]);
            i += 1;
            j += 1;
        } else if (eset < 0) {
            unioArr.push(arr1copy[i]);
            i += 1;
        } else {
            unioArr.push(arr2copy[j]);
            j += 1;
        }
    }
    while (i < arr1copy.length) {
        unioArr.push(arr1copy[i]);
        i += 1;
    }
    while (j < arr2copy.length) {
        unioArr.push(arr2copy[j]);
        j += 1;
    }
    return unioArr;
}

console.log('Unio: ', AunioB(numericArrayA, numericArrayB));


function AdiffB(arr1, arr2) {
    const diffArr = [];
    const arr1copy = arr1.slice();
    const arr2copy = arr2.slice();

    let i = 0;
    let j = 0;
    while ((i < arr1copy.length) && (j < arr2copy.length)) {
        let eset = arr1copy[i] - arr2copy[j];
        if (eset == 0) {
            i += 1;
            j += 1;
        } else if (eset < 0) {
            diffArr.push(arr1copy[i]);
            i += 1;
        } else {
            j += 1;
        }
    }
    while (i < arr1copy.length) {
        diffArr.push(arr1copy[i]);
        i += 1;
    }

    return diffArr;
}

console.log('Diff: ', AdiffB(numericArrayA, numericArrayB));


// function ADprodB(arr1, arr2) {
//     const DprodArr = [];
//     for (let i = 0; i < arr1.length; i += 1) {
//         for (let j = 0; j < arr2.length; j += 1) {
//             DprodArr.push([arr1[i], arr2[j]]);
//         }
//     }
//     return DprodArr;
// }

// or, in an advanced way (do not sort here!):

function ADprodB(arr1, arr2) {

    const DprodArr = [];

    for (a of arr1) {
        for (b of arr2) {
            DprodArr.push([a, b]);
        }
    }
    return DprodArr;
}

console.log('AprodB: ', ADprodB(numericArrayA, numericArrayB));