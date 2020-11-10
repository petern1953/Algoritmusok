// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb legkisebb elemét!

const numericArray = [1232, 65, 956, 1234, 7, 36];

function smallestElement(arr) {
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i += 1) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return smallest;
}

console.log(smallestElement(numericArray));