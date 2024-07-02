"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
var calc_js_1 = require("./calc.js");
var add = document.querySelector(".add");
var subtract = document.querySelector(".subtract");
var multiply = document.querySelector(".multiply");
var divide = document.querySelector(".divide");
add.addEventListener("click", function () {
    var addition = function (x, y) {
        return x + y;
    };
    exports.result = addition(+calc_js_1.num1.value, +calc_js_1.num2.value);
});
subtract.addEventListener("click", function () {
    var subtraction = function (x, y) {
        return x - y;
    };
    exports.result = subtraction(+calc_js_1.num1.value, +calc_js_1.num2.value);
});
multiply.addEventListener("click", function () {
    var multiplication = function (x, y) {
        return x * y;
    };
    exports.result = multiplication(+calc_js_1.num1.value, +calc_js_1.num2.value);
});
divide.addEventListener("click", function () {
    var division = function (x, y) {
        return x / y;
    };
    exports.result = division(+calc_js_1.num1.value, +calc_js_1.num2.value);
});
