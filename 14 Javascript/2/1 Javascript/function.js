writeMassage()
function writeMassage() {
    // Function body
    console.log('Find and book your ideo tour!')
}

// Call function
writeMassage()

// Function Parameter

function quotient(a, b) {
    // console.log(a / b)
    let result = a + b;
    return result;
}

console.log(quotient(10,10))
quotient(6, 2)

function luas(panjang, lebar) {
    return panjang * lebar;
}

// let result = luas(2, 2);
// console.log(result)
// console.log(luas(10, 10))

// Arrow Function Simple some above
let arrowFuncrion = (panjang, lebar) => panjang * lebar;
console.log(arrowFuncrion(10, 10));

// and Arrow Function
let arrowFunction2 = (panjang, lebar) => {return panjang * lebar}
let result = arrowFunction2(10, 10)
console.log(result)

console.log(5);

function printOne() {
    console.log(1);
}

console.log(9);

function printFour() {
    console.log(4);
}

setTimeout(printSix, 3000)
setTimeout(printOne, 0)
setTimeout(printFour, 0)
setTimeout(printSeven, 2000)

function printSix() {
    console.log(6);
}

function printSeven() {
    console.log(7);
}

const salary = 25000;

function getSalary(expenses) {
    let totalExpenses = expenses.reduce((acc, expense) => acc + expense, 0);
    let remainingSalary = salary - totalExpenses;
    return remainingSalary;
}

// Sample input
const expenses = [200, 1000, 300, 550];

// Output the result
console.log(getSalary(expenses)); // Output: 22950

