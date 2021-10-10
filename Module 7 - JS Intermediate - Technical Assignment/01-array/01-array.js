// Soal nomor 1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverse(arr) {
    let arrResult = [].concat(arr).reverse()
    return arrResult
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);

// Soal Nomor 2
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr) {
    let total = arr.reduce((previousValue, currentValue) => { return previousValue + currentValue })
    let average = total / 6;
    let result = arr.filter(a => a > average)
    return result.length
}

console.log(getAverage(arr1))
console.log(getAverage(arr2))

// Soal Nomor 3
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
];

function searchInArray(arr, num) {
    let arr1d = [].concat(...arr);
    let result = arr1d.find((e) => e === num);
    if (result === undefined) {
        return null;
    } else {
        return arr1d.indexOf(result)
    }
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));