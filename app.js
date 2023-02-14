let counter = document.getElementById("counter")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let reset = document.getElementById("reset")
let plus100 = document.getElementById("plus_100")
let minus100 = document.getElementById("minus_100")
let multiply10 = document.getElementById("multiply_10")
let divide10 = document.getElementById("divide_10")
let set1000 = document.getElementById("set_1000")
let set_1000 = document.getElementById("set_-1000")
let set0_001 = document.getElementById("set_0.001")

let value = 0

plus.addEventListener("click", () => {
    value += 1
    counter.textContent = value
})
minus.addEventListener("click", () => {
    if(value > 0){
        value -= 1
    }
    counter.textContent = value
})
reset.addEventListener("click", () => {
    value = 0
    counter.textContent = value
})
plus100.addEventListener("click", () => {
    value += 100
    counter.textContent = value
})
minus100.addEventListener("click", () => {
    if (value > 0){
        value -=100
    }
    counter.textContent = value
})
multiply10.addEventListener("click", () => {
    value *= 10
    counter.textContent = value
})
divide10.addEventListener("click", () => {
    value /= 10
    counter.textContent = value
})
set1000.addEventListener("click", () => {
    value = 1000
    counter.textContent = value
})
set_1000.addEventListener("click", () => {
    value = -1000
    counter.textContent = value
})
set0_001.addEventListener("click", () => {
    value = 0.001
    counter.textContent = value
})