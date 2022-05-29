function operate(operator, a, b) {
  switch (operator) {
    case `+`:
      return add(a, b);
    case `-`:
      return subtract(a, b);
    case `*`:
      return multiply(a, b);
    case `/`:
      return divide(a, b);
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

function square(a) {
  return a * a;
}

function roundPrecised(number, precision) {
  let power = Math.pow(10, precision);

  return Math.round(number * power) / power;
}

const container = document.querySelector(`.container`);

const digits = document.querySelectorAll(`.digit`);

const display = document.querySelector(`.display`);

const operators = document.querySelectorAll(`.operator`);

let calcMemory = {
  currentNum: [],
  a: 0,
  b: 0,
  operation: ``,
};

function updateDigits(nums, digit) {
  nums.push(digit.value);

  displayNumber(baseConvert(calcMemory.currentNum), display);
}

function displayNumber(number, display) {
  display.innerText = number;
}

[...digits].map((digit) => {
  digit.addEventListener(`click`, () => {
    updateDigits(calcMemory.currentNum, digit);
  });
});

[...operators].map((operator) => {
  operator.addEventListener(`click`, () => {
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
