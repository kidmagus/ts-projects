var form = document.querySelector(".todo__form");
var todoInput = document.querySelector(".todo__input");
var todos = document.querySelector(".todos");
// function loadTask(): Task[] {
//   const taskJSON = localStorage.getItem("Tasks");
//   if (taskJSON == null) return [];
//   return JSON.parse(taskJSON);
// }
// type Task = {
//   title: string;
//   completed: boolean;
//   createdAt: Date;
// };
// const todoArr: Task[] = loadTask();
// form?.addEventListener("submit", (e) => {
//   e.preventDefault();
//   if (todoInput?.value == "" || todoInput.value == null) return;
//   const newTask: Task = {
//     title: todoInput.value,
//     completed: false,
//     createdAt: new Date(),
//   };
//   addedTask(newTask);
//   todoInput.value = "";
//   todoArr.push(newTask);
//   saveTasks();
// });
// const addedTask = (task: Task) => {
//   const item = document.createElement("li");
//   const label = document.createElement("label");
//   const checkbox = document.createElement("input");
//   checkbox.addEventListener("change", () => {
//     task.completed = checkbox.checked;
//     saveTasks();
//   });
//   checkbox.type = "checkbox";
//   checkbox.checked = task.completed;
//   label.append(checkbox, task.title);
//   item.append(label);
//   todos.append(item);
// };
// todoArr.forEach(addedTask);
// const saveTasks = () => {
//   localStorage.setItem("Tasks", JSON.stringify(todoArr));
// };
function loadTask() {
    var taskJSON = localStorage.getItem("Tasks");
    if (taskJSON == null)
        return [];
    return JSON.parse(taskJSON);
}
var todoArr = loadTask();
todoArr.forEach(addedTodo);
form.addEventListener("submit", function (e) {
    e.preventDefault();
    var newTask = {
        title: todoInput.value,
        completed: false,
        createdAt: new Date(),
    };
    addedTodo(newTask);
    todoArr.push(newTask);
    saveTodo();
});
function addedTodo(task) {
    var item = document.createElement("li");
    var label = document.createElement("label");
    var checkbox = document.createElement("input");
    checkbox.addEventListener("change", function () {
        task.completed = checkbox.checked;
        saveTodo();
    });
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    label.append(checkbox, task.title);
    item.append(label);
    todos.append(item);
}
function saveTodo() {
    localStorage.setItem("Tasks", JSON.stringify(todoArr));
}
