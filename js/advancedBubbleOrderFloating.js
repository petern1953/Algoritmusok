// 11. floating elemű tömb javított buborékos rendezése!
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

const numericArray = [1232.23, 23.1, 65.12, 956.76, 1234.8, 7.98765, 23.76, 36.2345, 70.09, 1200.7];
let changed = true;
let temp;

function advancedBubbleOrderFloating(arr) {
    for (let i = arr.length - 1; (i > 0) && changed; i -= 1) {
        changed = false;
        for (let j = 0; j < i; j += 1) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                changed = true;
            }
        }
    }
}

advancedBubbleOrderFloating(numericArray);
console.log(numericArray);