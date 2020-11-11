// 13. Adott egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb. 
// A tömb elemeit rendezzük növekvő sorrendbe.Ezután a felhasználótól kérjünk be egy számot
// (addig kérjünk be értéket, míg valóban egy véges egész számot ad meg).
// A számot szúrjuk be a tömbbe úgy, hogy a tömb továbbra is rendezett maradjon, 
// tehát a megfelelő indexű helyre kerüljön be a plusz elem.
// Írasd ki a rendezett tömböt!

const numericArray = [1232, 23, 65, 956, 1234, 7, 23, 36, 70, 1200];
let changed = true;
let temp;
let askAnother = true;
let tested;

function advancedBubbleSortIntegerWithInputInsertion(arr) {
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
    while (askAnother) {
        let inputNumberToInsert = prompt("Please enter an any size finite positive integer number", "0");
        tested = parseInt(inputNumberToInsert);
        console.log(toString(tested), inputNumberToInsert);
        if ((inputNumberToInsert == null) ||
            (inputNumberToInsert == NaN) ||
            (tested.toString() != inputNumberToInsert) ||
            (tested < 0) ||
            (tested == Infinity)) {
            alert('Number not fits to the request!');
        } else {
            askAnother = false;
        }
    }
    let i = numericArray.length - 1;
    while ((numericArray[i] > tested) && (i > 0)) {
        numericArray[i + 1] = numericArray[i];
        i -= 1;
    } numericArray[i] = tested;
}

advancedBubbleSortIntegerWithInputInsertion(numericArray);
console.log(numericArray);