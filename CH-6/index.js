//JS in Browser
//Script tag

//Console Object
console.log(console)
console.error("Hey this is an error")
console.assert(5>53)
console.assert(555>53)
console.clear()
let obj = {a: 1, b:2, c:3}
console.table(obj)
console.warn("Hey please dont drink")
console.info("Hey this is an imp info")

console.log("log")
console.info("info")
console.warn("warn")
//console.error("err")
//console.assert("err" != false)
//console.assert("err" == false)

console.time()
console.time("a")
console.timeEnd("starting this process")

console.time("forLoop")
for(let i=0;i<5;i++){
    console.log(233)
}
console.time