// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb harmadik legnagyobb elemét!

const numericArray = [1232, 65, 956, 1234, 7000, 36, 70, 1200, 5, 12010];

// function thirdBiggestElement(arr) {
//     if (numericArray.length < 3) {
//         console.log('Túl rövid a tömb!');
//         return undefined;
//     }

//     let biggest = numericArray[0];
//     let secondBiggest;
//     let thirdBiggest;
//     if (numericArray[1] > biggest) {
//         secondBiggest = biggest;
//         biggest = numericArray[1];
//     } else {
//         secondBiggest = numericArray[1];
//     }
//     if (numericArray[2] > biggest) {
//         thirdBiggest = secondBiggest;
//         secondBiggest = biggest;
//         biggest = numericArray[2];
//     } else
//         if (numericArray[2] > secondBiggest) {
//             thirdBiggest = secondBiggest;
//             secondBiggest = numericArray[2];
//         } else {
//             thirdBiggest = numericArray[2];
//         }
//     let i = 3;
//     while (i < arr.length) {
//         if (numericArray[i] > biggest) {
//             thirdBiggest = secondBiggest;
//             secondBiggest = biggest;
//             biggest = numericArray[i];
//         } else {
//             if (numericArray[i] > secondBiggest) {
//                 thirdBiggest = secondBiggest;
//                 secondBiggest = numericArray[i];
//             } else {
//                 if (numericArray[i] > thirdBiggest) {
//                     thirdBiggest = numericArray[i];
//                 }
//             } i += 1;
//         }
//     }
//     return thirdBiggest;
// }

// console.log('A tömb 3. legnagyobb eleme: ' + thirdBiggestElement(numericArray));

let indexOfBiggest = [-1, -1, -1];
// let indexOfSearchedBiggest = 0; // pointer to indexOfBiggest
let nthBiggest = numericArray[0];
let smallest = -Infinity;

// keressük az n. legkisebb elemet
// alert('Kezdődik');
for (let i = 0; i < 3; i += 1) {
    // console.log(i);
    nthBiggest = -Infinity;
    for (let j = 0; j < numericArray.length; j += 1) {
        // console.log(i, j);
        // ha ott már talált legnagyobb elem van, ki kell hagyni az összehasonlításból
        if ((j == indexOfBiggest[0]) || (j == indexOfBiggest[1]) || (j == indexOfBiggest[2])) {
            console.log()
            continue;
        }
        if (numericArray[j] > nthBiggest) {
            nthBiggest = numericArray[j];
            indexOfBiggest[i] = j;
        }
    }
    // console.log(nthBiggest);
}

console.log(nthBiggest);