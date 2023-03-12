const todoText = document.querySelector(".todo-text");
const todoBtn = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener('click', appTodo);
todoList.addEventListener('click', deleteCheck);
function appTodo(event){
    //Cancels the event
    event.preventDefault();

    //Create todo lists
    const todoWrap = document.createElement('div');
    todoWrap.classList.add('todo');
    //Create li child
    const newTodo = document.createElement('li');
    newTodo.innerText=todoText.value;
    newTodo.classList.add('todo-item');
    todoWrap.appendChild(newTodo);
    //Check button
    const checkBtn=document.createElement('button');
    checkBtn.innerHTML='<i class="fas fa-check"></i>';
    checkBtn.classList.add('check-btn');
    todoWrap.appendChild(checkBtn);
    //Trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML='<i class="fas fa-trash"></i>';
    trashBtn.classList.add('trash-btn');
    todoWrap.appendChild(trashBtn);
    //Append the wrapper to the list
    todoList.appendChild(todoWrap);
    //Clear the input
    todoText.value="";
    //Set cursor to input
    todoText.focus();
}

