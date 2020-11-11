// Írd ki, hogy egy tetszőlegese elemszámú, bármilyen típusú elemeket tartalmazó tömb (feltételezzük, hogy beágyazott tömböt, objektumot nem tartalmaz) hányszor tartalmazza a 23-as számot!

const numericArray = [1232, '23', 23, true, 65, 23, 956, 23, 1234, '23', 7, 23, 36, 70, false, 'a23', 123, 231, '23a', 1200, 23, 23];
let numberToFind = 23;
let numberOf23s = 0;

function linearRepeatedSearch(arr, toFind) {
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === toFind) {
            numberOf23s += 1;
        }
    }
    return numberOf23s;
}

console.log(linearRepeatedSearch(numericArray, numberToFind));