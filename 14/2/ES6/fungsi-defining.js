// dunction Expresion


// const teganganListrik = 120;

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
