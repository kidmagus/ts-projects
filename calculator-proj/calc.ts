import { result } from "./functions.js";

export const num1 = document.getElementById("number1") as HTMLInputElement;
export const num2 = document.getElementById("number2") as HTMLInputElement;
const calc = document.querySelector(".calc");

calc.addEventListener("click", () => {
  console.log(result);
});
