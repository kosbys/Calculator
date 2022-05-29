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
  return roundPrecised(a / b, 2);
}

function square(a) {
  return a * a;
}

function roundPrecised(number, precision) {
  let power = Math.pow(10, precision);

  return Math.round(number * power) / power;
}

container = document.querySelector(`.container`);
digits = document.querySelectorAll(`.digit`);
display = document.querySelector(`.display`);

nums = [];

let calculateDisplay = [...digits].map((digit) => {
  digit.addEventListener("click", () => {
    if (nums.length == 0) {
      nums.push(digit.value);
      display.innerText = digit.value;
    } else {
      nums.push(digit.value);
      display.innerText = baseConvert(nums);
    }
  });
});

function baseConvert(array) {
  let total = 0;
  array.forEach((element, i) => {
    exp = 10 ** i;
    total += element * exp;
  });
  return total;
}
