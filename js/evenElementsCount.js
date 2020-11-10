// Írasd ki egy tetszőleges elemszámú, csak egész számokat tartalmazó tömb páros elemeinek a számát!

const numericArray = [1232, 65, 956, 1234, 7, 36, 70, 1200];

function evenElementsCount(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i += 1) {
        (arr[i] % 2) ? {} : count += 1;
    }
    return count;
}

console.log('A tömb páros elemeinek száma: ' + evenElementsCount(numericArray));