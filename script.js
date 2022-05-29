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

let x = [...digits].map((digit) => {
  digit.addEventListener("click", () => {
    if (nums.length == 0) {
      nums.push(digit.value);
      display.innerText = digit.value;
    } else {
        nums.push(digit.value);
        display.innerText = nums.reduce((total, num, i) => {
            /* reduce the sum of the array to be each digit times 10^i */
            console.log(`index ${i}`);
            console.log(`number ${num}`);

            return num * i;
        });
    }
  });
});
