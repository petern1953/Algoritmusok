// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb második legkisebb elemét!

const numericArray = [1232, 65, 956, 1234, 70, 36, 70, 1200, 5, 120];

function secondSmallestElement(arr) {
    if (numericArray.length < 2) {
        console.log('Túl rövid a tömb!');
        return undefined;
    }

    let smallest = numericArray[0];
    let secondSmallest = numericArray[0];

    for (let i = 1; i < arr.length; i += 1) {
        if (numericArray[i] < smallest) {
            secondSmallest = smallest;
            smallest = numericArray[i];
        } else {
            if (numericArray[i] < secondSmallest) {
                secondSmallest = numericArray[i];
            }
        }
    }
    return secondSmallest;
}

console.log('A tömb 2. legkisebb eleme: ' + secondSmallestElement(numericArray));