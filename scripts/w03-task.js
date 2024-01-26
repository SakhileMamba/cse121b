/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let add1 = Number(document.querySelector("#add1").value);
    let add2 = Number(document.querySelector("#add2").value);

    document.querySelector("#sum").value = add(add1, add2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
}

const subtractNumbers = function () {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => number1 * number2;


const multiplyNumbers = () => {
    let multiply1 = Number(document.querySelector("#factor1").value);
    let multiply2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = multiply(multiply1, multiply2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);


/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => number1 / number2;


function divideNumbers() {
    let divide1 = Number(document.querySelector("#dividend").value);
    let divide2 = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(divide1, divide2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */

document.querySelector("#getTotal").addEventListener("click", () => {
    let subTotal = Number(document.querySelector("#subtotal").value);
    
    if (document.getElementById("member").checked) {
        subTotal *= 0.8;
    }

    document.querySelector("#total").innerHTML = `$ ${subTotal.toFixed(2)}`;
});


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.querySelector("#array").innerHTML = numbersArr;

/* Output Odds Only Array */

document.querySelector("#odds").innerHTML = numbersArr.filter((x) => x % 2 !== 0);

/* Output Evens Only Array */

document.querySelector("#evens").innerHTML = numbersArr.filter((x) => x % 2 === 0);

/* Output Sum of Org. Array */

document.querySelector("#sumOfArray").innerHTML = numbersArr.reduce((x, y) => x + y);

/* Output Multiplied by 2 Array */

document.querySelector("#multiplied").innerHTML = numbersArr.map((x) => x * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").innerHTML = numbersArr.map((x) => x * 2).reduce((x, y) => x + y);