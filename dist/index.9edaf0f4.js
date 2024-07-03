var form = document.querySelector(".todo__form");
var todoInput = document.querySelector(".todo__input");
var todoBtn = document.querySelector(".todo__btn");
var todos = document.querySelector(".todos");
form === null || form === void 0 || form.addEventListener("submit", function(e) {
    e.preventDefault();
    todos.textContent = todoInput.value;
});

//# sourceMappingURL=index.9edaf0f4.js.map
