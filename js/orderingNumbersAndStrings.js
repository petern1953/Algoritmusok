// 14. Adott egy tömb, mely azonos darabú egész számot, és szöveget tartalmaz véletlenszerű sorrendben. 
// Rendezzük úgy a tömböt, hogy minden szám után egy string következzen! Írasd ki a rendezett tömböt!

// a már elkészített korábbi függvényünk
function advancedBubbleOrder(arr) {
    let changed = true;
    let temp;

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
    return arr;
}

// ezt kell rendezni
const mixedArray = [1232, 65, 956, 1234, 7, 'asd', 'Kuka', 23, 'barack', 'Kings Collage', 36, 70, 'a', 'b', 'c', 1200, 'télikabát', 'utolsó'];

function orderingNumbersAndStrings(arr) {
    const assistArrayNum = [];
    const assistArrayStr = [];
    for (let i = 0; i < arr.length; i += 1) {
        switch (typeof arr[i]) {
            case "string":
                assistArrayStr[assistArrayStr.length] = arr[i];
                break;
            case "number":
                assistArrayNum[assistArrayNum.length] = arr[i];
                break;
            default:
                alert('Nem string / numerikus adat!');
        }
        if (assistArrayStr.length != assistArrayNum.length) {
            console.log(assistArrayStr, assistArrayNum)
            alert('A stringek és numerikus adatok száma nem egyezik!');
            return undefined;
        }
    }

    // sorba rakjuk a stringeket és a numerikus tömböt
    advancedBubbleOrder(assistArrayNum);
    advancedBubbleOrder(assistArrayStr);

    // majd egyesítjük őket az eredeti tömbben
    for (let i = 0; i < assistArrayNum.length; i += 1) {
        arr[2 * i] = assistArrayNum[i];
        arr[2 * i + 1] = assistArrayNum[i];
    }
    return arr;
}

console.log(orderingNumbersAndStrings(mixedArray));