import { num1, num2 } from "./calc.js";

const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
export let result;
type x = number;
type y = number;

add.addEventListener("click", () => {
  const addition = (x: x, y: y) => {
    return x + y;
  };

  result = addition(+num1.value, +num2.value);
});

subtract.addEventListener("click", () => {
  const subtraction = (x: x, y: y) => {
    return x - y;
  };

  result = subtraction(+num1.value, +num2.value);
});

multiply.addEventListener("click", () => {
  const multiplication = (x: x, y: y) => {
    return x * y;
  };

  result = multiplication(+num1.value, +num2.value);
});

divide.addEventListener("click", () => {
  const division = (x: x, y: y) => {
    return x / y;
  };

  result = division(+num1.value, +num2.value);
});
