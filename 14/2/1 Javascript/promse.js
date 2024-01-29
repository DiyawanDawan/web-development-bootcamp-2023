/**
 * Method Promisi is 2 result
 * return resolve => true condition
 * return reject => false condition
 * @type {boolean}
 */

const myfriedHasApprovedMyposition = true;

let promise = new Promise(function (resolve, reject){
//     Code Exciute promise
    if (myfriedHasApprovedMyposition){
        return resolve("Hoowray! Now I'am a true programer!")
    }else{
        return reject(new Error("Woops! Have to study more =(: "))
    }
})

promise.then((result) => {
    console.log(result) // true condition resolve
}).catch((result) =>{
    console.log(result)
})



function passingExam (myPoints) {
    return new Promise(function(resolve, reject) {
        // write your function here
        if (myPoints >= 90) {
            resolve("You are enrolled!")
        }else{
            reject("Sorry, you haven't passed the Math exam")
        }
    });
}

const examRes = passingExam(50);
examRes
    .then(function(result) {
        console.log(result); // Output: Sorry, you haven't passed the Math exam
    })
    .catch(function(error) {
        console.error(error); // Output: Sorry, you haven't passed the Math exam
    });

const a = 25;
const b = 13;
const c = 37;
const value = a + b - c;
console.log(value)
new Promise(function (resolve, reject) {
    const value = a + b - c;
    if(value > 0){
        resolve(value)
    }else{
        reject(-value)
    }
    console.log(2)
})
