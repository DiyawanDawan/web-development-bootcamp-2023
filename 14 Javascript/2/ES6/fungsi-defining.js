// dunction Expresion


const teganganListrik = 120;

let nyalakanLampu = function (teganganListrik) {
    if (teganganListrik >= 120) {
        console.log('Nyalakan Lampu Sekarang')
    } else if(teganganListrik >= 10) {
        console.log('Nyalakan Lilin')
    } else {
        console.log('Zaman Purba')
    }
}

export default nyalakanLampu;

function sayMimin(){
    console.log('Say Mimin');
}
export {
    sayMimin,
}

/*
function welcomeMsg(name) {
    console.log(`Halo ${name} Welcome to Webpage`)
}
welcomeMsg('Bzaa')
let admin = 'Admin';
welcomeMsg(admin);

// Retun Value fun

function welcomeUser(user) {
    return `Welcome ${user} in Dashboard`;
}

console.log(welcomeUser('Otong'));
let user1 = 'Surotong';
console.log(welcomeUser(user1))
*/

(function () {
   console.log('Halo')
})()

let greeting = function (name) {
    return `Halo Welcome ${name} To Dasboar`
}
console.log( greeting('Awan'))
