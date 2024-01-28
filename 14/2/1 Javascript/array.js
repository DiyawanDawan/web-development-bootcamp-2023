import fungsiDefining from "../ES6/fungsi-defining.js";

// Array Declarsai
let markOneArra

let listbuah = ['Appel','Jeruk', 'Manngo'];

function addFruits(newBuah){
    newBuah.push('Manja')
}

// console.log(listbuah)
// listbuah.pop()
// console.log(listbuah)
// delete listbuah[1];
// console.table(listbuah)

function deletFruits(hapus){
    hapus.pop()
}
function showListFruits(){
    addFruits(listbuah);
    console.log(listbuah)
    deletFruits(listbuah);
    console.log(listbuah)
}

showListFruits()
