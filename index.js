//L-2
//Variables
console.log('Variables in JS');
var a = 67
console.log(a)
a = 'harry'
console.log(a)

//L-3
//Let, const, var
// var a = 45;
//var a = 'p';
let b = 'Harry Potter';
const author = 'Harry';
//author = 5 //Throws an error because constant can not be changed
b = 4;
const harry = 0;
let c = null;
let d = undefined;
{
    let b = 'this';
    console.log(b);
}
console.log(b);

//L-4
//Primitives and Objects
// nn bb ss u - Primitive
let e= null;
let f= 345;
let g= true;
let h= BigInt("567") + BigInt("3");
let i= "Harry"
let j= Symbol("I am a nice symbol");
let k;
console.log(e, f, g, h, i, j, k);
console.log(typeof g)
