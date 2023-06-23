const todoText = document.querySelector('.todo-text');
const todoBtn = document.querySelector('.todo-btn');
const todoList = document.querySelector('.todo-list');
const filterOpt = document.querySelector('.filter-todo');

document.addEventListener("DOMContentLoaded", getTodos);
todoBtn.addEventListener('click', appTodo);
todoList.addEventListener('click', deleteCheck);
filterOpt.addEventListener('click', filterSelect);

function appTodo(event) {
  //Cancels the event
  event.preventDefault();
  if (todoText.value === '') {
    alert('Enter a text');
    todoText.value = '';
  } else {
    //Create todo lists
    const todoWrap = document.createElement('div');
    todoWrap.classList.add('todo');
    //Create li child
    const newTodo = document.createElement('li');
    newTodo.innerText = todoText.value;
    newTodo.classList.add('todo-item');
    todoWrap.appendChild(newTodo);
    //Add to local storage
    saveLocalTodo(todoText.value);
    //Check button
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fas fa-check"></i>';
    checkBtn.classList.add('check-btn');
    todoWrap.appendChild(checkBtn);
    //Trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoWrap.appendChild(trashBtn);
    //Append the wrapper to the list
    todoList.appendChild(todoWrap);
    //Clear the input
    todoText.value = '';
    //Set cursor to input
  }
  todoText.focus();
}

function deleteCheck(event) {
  const item = event.target;
  //DELETE TODO
  if (item.classList[0] === 'trash-btn') {
    // document.querySelector('.todo').remove();
    const todo = item.parentElement;
    //Falling animation
    todo.classList.add('fall');
    //Transitionend event fired when the CSS transition has completed
    todo.addEventListener('transitionend', function () {
      todo.remove();
    });
  }
  //CHECK TODO
  if (item.classList[0] === 'check-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterSelect(opt) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (opt.target.value) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'incompleted':
        if (!todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      default:
        break;
    }
  });
}

// SAVE TO LOCAL STORAGE
function saveLocalTodo(todo) {
  let todos;
  if (localStorage.getItem('todos') === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem('todos'));
  }
  todos.push(todo);
  localStorage.setItem('todos', JSON.stringify(todos));
}

// GET FROM LOCAL STORAGE
function getTodos() {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = [];
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
      //Create todo lists
      const todoWrap = document.createElement('div');
      todoWrap.classList.add('todo');
      //Create li child
      const newTodo = document.createElement('li');
      newTodo.innerText = todo;
      newTodo.classList.add('todo-item');
      todoWrap.appendChild(newTodo);
      //Check button
      const checkBtn = document.createElement('button');
      checkBtn.innerHTML = '<i class="fas fa-check"></i>';
      checkBtn.classList.add('check-btn');
      todoWrap.appendChild(checkBtn);
      //Trash button
      const trashBtn = document.createElement('button');
      trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
      trashBtn.classList.add('trash-btn');
      todoWrap.appendChild(trashBtn);
      //Append the wrapper to the list
      todoList.appendChild(todoWrap);
    });
  }
