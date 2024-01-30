const number1 = "20" // String TypeOf String
const number2 = 10  // Number

function addOperator(){
    let result = number1 + number2;
    return result;
}

console.log(addOperator()) // 2010 => JS automatic conversi number2 to string or number1 string

/**
 * Numeric conversion
 * Number("1");    // 1
 * Number(" 37 "); // 37
 * Number("");     // 0
 * Number("\n3");  // 3
 * Number("\n");   // 0
 * Number("\t");   // 0
 * Number(true);   // 1
 * Number(false);  // 0
 *
 * Boloan Conversi
 *
 * Boolean(1);            // true
 * Boolean(0);            // false
 * Boolean("Am I nice?"); // true
 * Boolean("");           // false
 */

// const a = "22";
// const b = 10;
//
// function convrsi(){
//     let result = Number(a) + b;
//     return  result
// }
//
// console.log(convrsi()) // 220 => a conversi tonumber
//
// console.log(6 - 1 + "4" + 2)


const a = -17
console.log(typeof (a))

const b = "";
console.log(typeof(b))

const c = "false"

const d = 0

// const halo = true;
// const conver = String(halo)
// console.log(typeof (conver))
