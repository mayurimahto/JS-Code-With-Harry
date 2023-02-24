//Strings
let nameis = "CodeWithHarry"

console.log(nameis[0])
console.log(nameis.length)

//Template literal
let boy1 = "Pramod"
let boy2 = "Nikhil"

let sentence = `${boy2} is a friend of ${boy1}`
console.log(sentence)

//Escape Sequence Characters
let fruit = 'Bana\'na'
console.log(fruit)

//String Methods
console.log(nameis.toUpperCase())
console.log(nameis.toLowerCase())
console.log(nameis.slice(0,8))
console.log(nameis.slice(1))
console.log(nameis.replace("Harry", "Mayuri"))

let friend1 = "Mayuri"
let friend2 = "Lakshya"
console.log(friend1.concat(" is a friend of ", friend2, " Ok "))

let friend3 = "      Isha   "
console.log(friend3.trim())

//Strings are immutable matlab usse kabhi bhi change nhi kiya ja sakta hai