const prompt = require("prompt-sync")()

let num = Number(prompt("Enter a number:"))

console.log(`Multiplication table of ${num}:`)

for(let i= 1; i<=10; i++){
    let tab = num * i
    console.log(`${num} x ${i} = ${tab}`)
}