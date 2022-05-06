//selectors
const toDoInput = document.querySelector('.todo-input')
const toDoButton = document.querySelector('.todo-button')
const toDoList = document.querySelector('.todo-list')

//events
toDoButton.addEventListener('click', addTodo)
toDoList.addEventListener('click', deleteCheck )


//Func

function addTodo(event){
    event.preventDefault();
    const todoDiv = document.createElement('div')
    todoDiv.classList.add ('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = toDoInput.value
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo)


    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)

    toDoList.appendChild(todoDiv)
    //clear to do input value
    toDoInput.value = '';

}

function deleteCheck(event){
    //console.log(event.target)
    const item = event.target;
    if( item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        todo.remove()
    }

    //line throw

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement
        todo.classList.toggle('completed')

    }

}