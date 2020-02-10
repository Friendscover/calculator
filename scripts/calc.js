function operator(operator, x, y)
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

