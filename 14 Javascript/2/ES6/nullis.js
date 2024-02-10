function caffe(bar) {
    bar = bar || 23
    console.log(bar)
}
caffe()
caffe(22)

console.log('============')

function bar(menu){
    menu = menu ?? 40;
    console.log(menu)
}
bar()
bar(50)

console.log('=========')
const food = {
    bar :0
}

// const valueBar = food.bar ?? 80;
// const valueBaz = food.bar ?? 80;
// console.log('Value Bar : ', valueBar)
// console.log('Value Baz is :', valueBaz)

const foo = {
    bar: 0
}

const valueBar = foo.bar ?? 42;
const valueBaz = foo.baz ?? 42;

// Value of bar: 0
console.log("Value of bar: ", valueBar);

// Value of bar: 42
console.log("Value of baz: ", valueBaz);
