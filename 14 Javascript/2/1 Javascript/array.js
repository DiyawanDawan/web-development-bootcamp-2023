let house = ["1BHK", "2BHK", "3BHK", "4BHK", true, {resto: [
    "Jaya", 'Kusima', "Kesemel"
    ]}];

console.log(house)

for (let i = 0; i < house.length; i++) {
    console.log(house[i])
}

house.forEach(house => console.log(house))

let number = Math.floor(Math.random() * house.length)
console.log(number)

let listNumber = [1,2,3,4,5,6,7,8,9];
let events = listNumber.filter(event => event % 2 === 0);
console.log(events)

let newSpraat = [house,...listNumber]
console.log(newSpraat)


function sprit() {
    let stri = 'Geeks Foor Geeks';
    let newArray = stri.split('Foor');
    console.log(newArray.join(''))
}
sprit()


function func() {
    var a = [ 1, 2, 3, 4, 5, 6 ];
    console.log(a.join(''));
}
func();

const user1 = {
    name: 'Jen',
    age: 22,
};

const user2 = {
    name: "Andrew",
    location: "Philadelphia"
};


let person1 = {
    name: "Otong",
    ege: 30,
    adres: 'Jln Sukarno Kolonogn West'
}

let person2 = {
    name: "Surotong",
    ege: 40,
    addres: 'Jln Melonong West Est'
}

let newObjet = {person2,...person1}
console.log(typeof newObjet)
if (newObjet === typeof 'object') {
    console.log(newObjet)
} else  {
    console.log('Is Not Objet')
}
// console.log(newObjet)





/*
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
*/
