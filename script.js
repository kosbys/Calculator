function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    case "exp":
      return exponent(a, b);
  }
}

/* Basic operations */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return roundPrecised(a / b, 3);
}

function exponent(a, b) {
  return a ** b;
}

function roundPrecised(number, precision) {
  const power = 10 ** precision;

  return Math.round(number * power) / power;
}

const digits = document.querySelectorAll(".digit");

const mainDisplay = document.querySelector(".display");

const topDisplay = document.querySelector(".display-mini");

const operators = document.querySelectorAll(".operator");

const calcMemory = {
  currentNum: [],
  a: 0,
  b: 0,
  operation: "",
};

function updateDigits(nums, digit) {
  nums.push(digit.value);

  const num = baseConvert(calcMemory.currentNum);

  displayNumber(num, mainDisplay);
  if (calcMemory.operation === "") {
    calcMemory.a = num;
  } else {
    calcMemory.b = num;
  }
}

function addOperator(operator) {
  if (operator == "=") {
    switch (calcMemory.operation) {
      case "":
        break;
      default:
        const result = operate(
          calcMemory.operation,
          calcMemory.a,
          calcMemory.b
        );
        displayNumber(result, mainDisplay);
        displayNumber(``, topDisplay);
        calcMemory.a = result;
        calcMemory.b = 0;
        calcMemory.operation = ``;
        resetNums(calcMemory.currentNum);
    }
  } else if (operator == `clear`) {
    initCalc();
  } else if (calcMemory.operation == "") {
    calcMemory.operation = operator;
    num = `${calcMemory.a} ${calcMemory.operation}`;
    displayNumber(num, topDisplay);
    displayNumber(calcMemory.b, mainDisplay);
    resetNums(calcMemory.currentNum);
  }
}

function resetNums(nums) {
  nums.splice(0, nums.length);
}

function initCalc() {
  resetNums(calcMemory.currentNum);
  calcMemory.a = 0;
  calcMemory.b = 0;
  calcMemory.operation = ``;
  displayNumber(0, mainDisplay);
  displayNumber(``, topDisplay);
}

function displayNumber(number, display) {
  display.innerText = number;
}

[...digits].map((digit) => {
  digit.addEventListener("click", () => {
    updateDigits(calcMemory.currentNum, digit);
  });
});

[...operators].map((operator) => {
  operator.addEventListener("click", () => {
    addOperator(operator.value);
  });
});

function baseConvert(array) {
  let total = 0;
  array.forEach((element, i) => {
    exp = 10 ** (array.length - i - 1);

    total += element * exp;
  });
  return total;
}
