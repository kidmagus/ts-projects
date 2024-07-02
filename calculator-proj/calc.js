"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.num2 = exports.num1 = void 0;
var functions_js_1 = require("./functions.js");
exports.num1 = document.getElementById("number1");
exports.num2 = document.getElementById("number2");
var calc = document.querySelector(".calc");
calc.addEventListener("click", function () {
    console.log(functions_js_1.result);
});
