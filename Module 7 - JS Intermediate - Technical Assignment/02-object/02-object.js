// Soal Nomor 1
const person = {
    name: "person A",
    age: 100,
    favDrinks: [
        "coffee",
        "jamu temulawak",
        "tea"
    ],
    greeting: function () {
        console.log("hello world")
    }
}

/// EDIT HERE
person.name = 'Hafezd El Daffa';
person.favDrinks[1] = 'tap water';
person.greeting = (name) => {
    console.log(`Hello, ${name}`)
}

/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));

// Soal Nomor 2
function getObjectValue(obj, path) {
    let pathSplit = path.split('.')
    let pathSpread = [].concat(...pathSplit)
    let result = obj[pathSpread[0]][pathSpread[1]][pathSpread[2]];
    if (result === undefined) {
        return null
    }
    return result
}

const milkBasedCoffee = {
    name: "latte",
    ingredients: {
        espresso: {
            origin: "lampung",
            roastProfile: "medium to dark",
            ratio: 1
        },
        milk: {
            brand: "susu murni",
            isVegan: false,
            ratio: 5
        }
    },
}

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan)

// Soal Nomor 3
// dibawah ini merupakan history transasksi yang telah kalian lakukan
const items = [
    {
        btc: { buy: 10, sell: 9 },
        eth: { buy: 8, sell: 7.5 },
        doge: { buy: 7, sell: 6.5 },
        day: 1,
    },
    {
        btc: { buy: 9, sell: 5 },
        eth: { buy: 7, sell: 4 },
        doge: { buy: 6, sell: 3 },
        day: 2,
    },
    {
        btc: { buy: 5, sell: 10 },
        eth: { buy: 4, sell: 6 },
        doge: { buy: 3, sell: 4 },
        day: 3,
    },
];

const calculateIncome = (items) => {
    let btc = items.map(i => i.btc)
    let eth = items.map(i => i.eth)
    let doge = items.map(i => i.doge)
    let reducer = (prev, current) => {
        return current - prev;
    }

    let mapBtc = btc.map(b => [b.buy, b.sell])
    let totBtc = [].concat(...mapBtc).reduce(reducer);

    let mapDoge = doge.map(d => [d.buy, d.sell])
    let totDoge = [].concat(...mapDoge).reduce(reducer);

    let mapEth = eth.map(e => [e.buy, e.sell])
    let totEth = [].concat(...mapEth).reduce(reducer);

    const result = {
        btc: totBtc,
        doge: totDoge,
        eth: totEth
    }

    return result;
}

console.log(calculateIncome(items))