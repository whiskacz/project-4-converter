const btnConvert = document.querySelector(".konwertuj")
const btnReset = document.querySelector(".reset")
const btnChange = document.querySelector(".zamien")
const span1 = document.querySelector(".one")
const span2 = document.querySelector(".two")
const result = document.querySelector("p")
const input = document.querySelector("#number")
let flag = true
const numbers = /[0-9]/i


const main = () => {
    if(input.value.match(numbers))
    return
    else{
        alert("błędna wartość")
    }
}


const convert = () => {
if(flag){
result.textContent = Math.floor((((input.value)-32)*(5/9)))
console.log(result)
span1.textContent = "F"
span2.textContent = "C"
}
else{
    
    result.textContent = Math.floor((input.value*1.8)+32)
}
}
const reset = () => {
    input.value = ""
    result.textContent = "---------"
}
const change = () => {
    flag = !flag
    span1.textContent = "C"
    span2.textContent = "F"
}

btnConvert.addEventListener("click", convert)
btnReset.addEventListener("click", reset)
btnChange.addEventListener("click", change)
input.addEventListener("input", main)


