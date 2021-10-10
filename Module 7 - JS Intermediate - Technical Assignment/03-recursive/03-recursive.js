// Soal Nomor 1
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 3, 1, 10, 22];
function sumOfArray(arr) {
    let newArr = [].concat(...arr);
    let result = newArr.reduce((prev, current) => {
        return prev + current
    })
    return result;
}

console.log(sumOfArray(arr1));
console.log(sumOfArray(arr2));

// Soal Nomor 2
const avg1 = avgOfArray(arr1);
const avg2 = avgOfArray(arr2);

function avgOfArray(arr) {
    let newArr = [].concat(...arr);
    let result = newArr.reduce((prev, current) => {
        return prev + current
    })
    return result / 5;
}

function countAboveAvg(arr) {
    let avg = avgOfArray(arr);
    let result = arr.filter(el => el >= avg)
    return result.length
}

const totalAboveAvg1 = countAboveAvg(arr1, avg1);
const totalAboveAvg2 = countAboveAvg(arr2, avg2);

console.log(totalAboveAvg1);
console.log(totalAboveAvg2);

// Soal Nomor 3
const arr = [1, 2, 3, 4, 5];
function searchInArray(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return `angka ditemukan pada index ${i}`;
        } else if (Array.isArray(arr[i])) {
            searchInArray(arr[i]);
        }
    }
    return 'angka tidak ditemukan';
}

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));
