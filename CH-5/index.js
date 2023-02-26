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