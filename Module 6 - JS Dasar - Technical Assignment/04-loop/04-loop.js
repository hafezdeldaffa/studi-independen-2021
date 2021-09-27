/// Soal - 01
/// Kamu diminta untuk membuat sebuah perulangan menggunakan for loop, untuk mencetak angka prima dari 1 ~ 100
/// EDIT HERE
function getPrimes(max) {
    let sieve = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                sieve[j] = true;
            }
        }
    }
    return primes;
}

console.log(getPrimes(100))

/// Soal - 02
/// Kamu diminta untuk menemukan bilangan prima ke-50, temukan bilangan tersebut menggunakan while loop

let primeCounter = 0;
const fiftiethPrime;

/// EDIT HERE
let sieve = [], i = 2, j, primes = [];
while (i <= 228) {
    if (!sieve[i]) {
        primes.push(i);
        for (j = i << 1; j <= 228; j += i) {
            sieve[j] = true;
        }
    }
    i++;
}
console.log(primes.pop())


/// Soal - 03
/// Kamu diminta untuk menemukan bilangan ganjil ke-50, temukan bilangan tersebut menggunakan do while loop

let i = 1
do {
    if (i % 2 != 0) {
        if (i === 99) {
            console.log(i);
        }
    }
    i++;
} while (i < 100)