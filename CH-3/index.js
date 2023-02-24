//For Loops
for(let i=0; i< 5; i++){
    console.log(i)
}
//For In Loop
let obj = {
    harry: 90,
    Shubh: 45,
    Shivika: 56,
    Ritika: 57,
    Shiv: 23
}

for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a])
}

//For OF Loops
for(let b of "Harry"){
    console.log(b)
}

//While Loops
let n = 3
let i=0
while(i<n){
    console.log(i)
    i++
}

//Do While Loops
let m=5
let j=10
do{
    console.log(j)
    j++
}while(j<m)

//Functions
function onePlusAvg(x, y){
    return 1 + (x+y)/2
    console.log("Done")
}

let a = 1
let b = 2
let c = 3

console.log("One plus Avg of a and b is ", onePlusAvg(a,b))
console.log("One plus Avg of b and c is ", onePlusAvg(b,c))
console.log("One plus Avg of a and c is ", onePlusAvg(a,c))

//ek aur way to create function
const hello = ()=> {
    console.log("Hey how are you")
    return "hiiiiiiii"
}
hello()

let v = hello()
console.log(v)