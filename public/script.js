document.getElementById("todo-form").addEventListener('submit', function(event) {
  event.preventDefault();
  const listitem = document.getElementById('Input');
  const todoText = listitem.value.trim();
  if (todoText !== '') {
    addTodoText(todoText);
    listitem.value = '';
  }
});

function addTodoText(text) {
  const li = document.createElement('li');
  li.textContent = text;

const removeButton = document.createElement('button');
removeButton.textContent = "Remove";
removeButton.addEventListener('click', function() {
  li.remove();
});

document.body.style.backgroundColor = "pink";

li.appendChild(removeButton);
document.getElementById('todo-form').appendChild(li);
}
