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

let calcArray = [];
let operationArray = [];
let tempVarToArray = ""

//button event listener 
const numberButtons = document.querySelectorAll(".numberContainer button");
numberButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        fillInputField(button.id)
        tempVarToArray = tempVarToArray + button.id
    });
});

const calcButtons = document.querySelectorAll(".calcContainer button");
calcButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        addToCalcArray()
        fillInputField(button.id)
        operationArray.push(button.id)
    });
});

const resultButton = document.querySelector(".equalContainer button");
resultButton.addEventListener("click", () => {
    addToCalcArray()
    updateTextInput(calcResult())
    //updateTextInput(decideOperator(operation, firstValue, parseInt(getInputFieldValue())))
});

const clearButton = document.querySelector(".clearContainer button");
clearButton.addEventListener("click" , () => {
    clearInput()
});

//input population
function fillInputField(id)
{
    let inputValue = getInputFieldValue();
    inputValue = inputValue + id; 
    updateTextInput(inputValue);
}

function updateTextInput(value)
{
    document.getElementById("result").value = value;
}

function clearInput()
{
    document.getElementById("result").value = "";
    calcArray = [];
    operationArray = [];
    tempVarToArray = [];
}

function getInputFieldValue()
{
    return document.getElementById("result").value;
}

//push temp Value to Array
function addToCalcArray()
{
    if(tempVarToArray == "")
    {
        calcArray.push(getInputFieldValue());
    }
    else
    {
        calcArray.push(parseInt(tempVarToArray));
        tempVarToArray = "";
    }
}

function calcResult()
{
    let firstValue = parseInt(calcArray.shift());
    for(i = 0; i <= calcArray.length; i++)
    {
        let currentOperation = operationArray.shift();
        firstValue = decideOperator(currentOperation, firstValue, parseInt(calcArray.shift()));
    }
    if(!isFinite(firstValue))
    {
        return "Oops. Something went wrong!"
    }
    else
    {
        return firstValue;
    }
}