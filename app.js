const result = document.getElementById('result')
const firstNumber = document.getElementById('first-number')
const secondNumber = document.getElementById('second-number')
const btnPlus = document.getElementById('btn-plus')
const btnMinus = document.getElementById('btn-minus')
const btnMultiply = document.getElementById('btn-multiply')
const btnDivide = document.getElementById('btn-divide')

function checkResultForColor() {
    if (result.value <= 0) {
        result.style.color = 'red'
    }
    else result.style.color = 'green'
}

result.disabled = true

btnPlus.onclick = function plus() {
    result.value = Number(firstNumber.value) + Number(secondNumber.value)
    checkResultForColor()
}

btnMinus.onclick = function minus() {
    result.value = Number(firstNumber.value) - Number(secondNumber.value)
    checkResultForColor()
}

btnMultiply.onclick = function multiply() {
    result.value = Number(firstNumber.value) * Number(secondNumber.value)
    checkResultForColor()
}

btnDivide.onclick = function divide() {
    result.value = Number(firstNumber.value) / Number(secondNumber.value)
    checkResultForColor()
}



