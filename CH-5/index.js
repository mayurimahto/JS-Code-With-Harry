//Arrays
let marks = [91, 82, 73, 64, false, "Not present"]
console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])

console.log("The length of marks of class is",marks.length)
//Arrays are mutable that means it can be changed
marks[6] = 88
console.log(marks[6])
marks[0] = 99
console.log(marks[0])

console.log(typeof marks)

for( i in marks) {
    console.log(marks[i])
    i++
}

//Array Methods
let num = [1, 2, 3, 4]
let b = num.toString()
console.log(b, typeof b)

let c = num.join("_")
console.log(c, typeof c)

num.pop()
console.log(num) 

num.push(5)
console.log(num)

let d = num.shift()
console.log(d)
console.log(num)

let e = num.unshift(6)
console.log(num)

delete num[0]
console.log(num)  // does not change the length

let num2 = [7, 8, 9, 10]
let num3 = [ 11, 12, 13, 14, 15]
let newarray = num.concat(num2, num3)
console.log(newarray)

let num4 = [55, 3, 35, 4, 7, 9, 789, 54, 5, 40, 1]
console.log(num4.sort()) // sorts alphabetically

//for ascending order sorting
let compare = (a, b)=> {
    return a-b  // positive hoga toh ascending
}
num4.sort(compare)

console.log(num4)

// for ddescending order sorting
let compare2 = (a, b)=> {
    return b-a
}
num4.sort(compare2)
console.log(num4)

num.reverse()
console.log(num)

//splice and slice //vey important

num.splice(1, 2, 1011, 1022, 1033, 1044, 1055)
console.log(num)

let newnum = num.slice(3,5)
console.log(newnum)

//For Loops in Arrays

let num5 = [3, 54, 2, 88, 6, 72]

for(let i=0; i<num5.length; i++){
    console.log(num5[i])
}

//ForEach Loop
num5.forEach((element)=> {
console.log(element*element)
})

//Array.from
let nameis = "Harry"
let arr = Array.from(nameis)
console.log(arr)

//for...of
for (let i of arr){
    console.log(i)
}

//for...in
for( let i in arr){
    console.log(i)
}

for(let i in arr){
    console.log(arr[i])
}

//Map Filter Reduce

//Map method
let array = [45, 25, 5]
let array2 = array.map((value, index, array)=>{
    console.log(value, index, array)
    return value+10
})
console.log(array2)

//Filter method
let array3 = [45, 3, 15, 9, 10, 20]
let array4 = array3.filter((i=>{
    return i<10
}))
console.log(array4, array3)

//Reduce method

let array5 = [1, 2, 3, 3, 4, 5]
let newarray5 = array5.reduce((h1, h2)=>{
    return h1 + h2
})
console.log(newarray5)