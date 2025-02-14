
let counter = 0;
function addTask() {
let input = document.getElementById("taskInput");
let taskText = input.value.trim();
if (taskText === "") return;
counter++;
let li = document.createElement("li");

let checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.onchange = function () {
    li.classList.toggle("done");
};

let span = document.createElement("span");
span.textContent = taskText;

let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.onclick = function () {
    li.remove();
};

li.appendChild(checkbox);
li.appendChild(span);
li.appendChild(deleteButton);
document.getElementById("listitself").appendChild(li);
input.value = "";

}
