// vegyeselemű tömb javított buborékos rendezése!
// Rendezd a javított buborékos rendezés algoritmus segítségével egy tetszőleges elemszámú,
// beágyazott tömb, és objektum kivételével bármilyen típusú elemeket tartalmazó tömb elemeit csökkenő sorrendbe!
// A nem szám típusú elemeket rakd a tömb végére az eredeti sorrendbe.Írasd ki a rendezett tömböt!

const numericArray = [1232, '23', false, 65, 956, 1234, 7, true, '23a', 23, 36, 'a23', 70, 1200];
let changed = true;
let temp;
let countOfNotNumeric = 0;
let findPosition = -1;

function advancedBubbleSortOfMixedArray(arr) {
    // first, move not numeric elements to upper end
    for (let i = numericArray.length - 1; i >= 0; i -= 1) {
        // console.log(i, numericArray[i]);
        if (typeof numericArray[i] != 'number') {
            // console.log(i, numericArray[i]);
            findPosition = i;
            temp = numericArray[i];
            numericArray[i] = numericArray[numericArray.length - 1 - countOfNotNumeric];
            // console.log(i, numericArray[i], countOfNotNumeric);
            numericArray[numericArray.length - 1 - countOfNotNumeric] = temp;
            countOfNotNumeric += 1;
            i = findPosition;
        }
    }
    // then, sort the rest the normal way in reverse order
    for (let i = numericArray.length - 1 - countOfNotNumeric; (i > 0) && changed; i -= 1) {
        changed = false;
        for (let j = 0; j < i; j += 1) {
            if (numericArray[j] < numericArray[j + 1]) {
                temp = numericArray[j + 1];
                numericArray[j + 1] = numericArray[j];
                numericArray[j] = temp;
                changed = true;
            }
        }
    }
}

advancedBubbleSortOfMixedArray(numericArray);
console.log(numericArray);