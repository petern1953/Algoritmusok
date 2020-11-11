// vegyeselemű tömb javított buborékos rendezése!
// void bubble(int[] arr, int size) {
//     int i;
//     int j;
//     int tmp;
//     bool csere = true;
//     for (i = size - 1; 0 < i && csere; --i) {
//         csere = false;
//         for (j = 0; j < i; ++j) {
//             if (a[j] > a[j + 1]) {
//                 // csere
//                 tmp = a[j];
//                 a[j] = a[j + 1];
//                 a[j + 1] = tmp;
//                 csere = true; // ha volt csere, a változót igazra állítjuk
//             }
//         }
//     }
// }

const numericArray = [1232, '23', false, 65, 956, 1234, 7, true, '23a', 23, 36, 'a23', 70, 1200];
let changed = true;
let temp;

function advancedBubbleOrderOfMixedArray(arr) {
    for (let i = numericArray.length - 1; (i > 0) && changed; i -= 1) {
        changed = false;
        for (let j = 0; j < i; j += 1) {
            if (numericArray[j] > numericArray[j + 1]) {
                temp = numericArray[j + 1];
                numericArray[j + 1] = numericArray[j];
                numericArray[j] = temp;
                changed = true;
            }
        }
    }
}

console.log(advancedBubbleOrderOfMixedArray(numericArray, numberToFind));