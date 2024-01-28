/**
 * Operator	Fungsi
 * ==	    Membandingkan kedua nilai, tetapi mengabaikan tipe data.
 * !=	    Membandingkan kedua nilai haruslah tidak sama, tetapi mengabaikan tipe data.
 * ===	    Membandingkan kedua nilai beserta tipe data.
 * !==	    Membandingkan kedua nilai beserta tipe data haruslah tidak sama.
 * >	    Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
 * >=	    Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
 * <	    Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
 * <=	    Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
 */

// let number1 = 13;
// let number2 = 12;
// let result = number1 + number2;
//
//
// if (number1 >= number2 && number1 === number2) {
//     console.log(`Bener ${number1} => ${number2} dan sama tipe data dan juga nilainya`);
// } else if(number1 >= number2 || number1 == number2 != result) {
//     console.log(`Number1 ${number1} >= ${number2} Atau Number 1 ${number1} sama Nilainya dengan ${number2}`)
// }

let egeWomone = 16;
let egeMen = 17
let isMeried = 'Meried'


if(egeWomone >= 17 && egeMen >= 18) {
    console.log(`${isMeried} Now I'm Meried`);
} else if(egeWomone >= 15 && egeMen >= 16) {
    console.log(`I'm Not ${isMeried} Now is Remaja`);
} else {
    console.log('Masih suka Colli')
}
