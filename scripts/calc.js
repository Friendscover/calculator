//calc logic
function decideOperator(operator, x, y)
{
    if(operator == "*" || operator == "multiply")
    {
        return multiply(x, y);
    }
    else if(operator == "+" || operator == "add")
    {
        return add(x, y);
    }
    else if(operator == "-" || operator == "substract")
    {
        return substract(x, y);
    }
    else if(operator == "/" || operator == "divide")
    {
        return divide(x, y);
    }
    else
    {
        console.log("That is not an operator! Try +,-,*,/ !");
    }
}

function add(x, y)
{
    return (x + y);
}

function substract(x, y)
{
    return (x - y);
}

function multiply (x, y)
{
    return (x * y);
}

function divide (x, y)
{
    return (x / y);
}

let firstValue = "";
let operation ="";

//button event listener 
const numberButtons = document.querySelectorAll(".numberContainer button");
numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        fillInputField(button.id)
    });
});

const calcButtons = document.querySelectorAll(".calcContainer button");
calcButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        firstValue = parseInt(getInputFieldValue())
        clearInput()
        operation = button.id
    });
});

const resultButton = document.querySelector(".equalContainer button");
resultButton.addEventListener("click", () => {
    updateTextInput(decideOperator(operation, firstValue, parseInt(getInputFieldValue())))
});

const clearButton = document.querySelector(".clearContainer button");
clearButton.addEventListener("click" , () => {
    clearInput()
});

//input population
function fillInputField(id)
{
    let inputValue = getInputFieldValue();
    if(id == 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9)
    {
        inputValue = inputValue + id; 
        updateTextInput(inputValue);
    }
}

function updateTextInput(value)
{
    document.getElementById("result").value = value;
}

function clearInput()
{
    document.getElementById("result").value = "";
}

function getInputFieldValue()
{
    return document.getElementById("result").value;
}