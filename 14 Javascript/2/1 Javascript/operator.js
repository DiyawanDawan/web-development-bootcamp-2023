/**
 * Operator	Fungsi	        Contoh
 * +	    Penjumlahan	    10 + 10 = 20
 * -	    Pengurangan 	15 - 7 = 8
 * /	    Pembagian	    21 / 7 = 3
 * *	    Perkalian	    9 * 9 = 81
 * %	    Sisa hasil bagi	5 % 2 = 1
 * **	    Perpangkatan	3 ** 3 = 27
 */

let number1 = 10
let number2 = 10;
let number = 12;

let result = number1 + number2 * number;

if (result => 100){
    let hasil = result + 10
    console.log('Lebih dari 100 => ' + hasil)
} else {
    console.log("Kurang 100 => "+ result)
}

console.log(number1 + number2 );
console.log(number1 - number2 );
console.log(number1 / number2 );
console.log(number1 * number2 );
console.log(number1 % number2 );
console.log(number1 ** number2 );

