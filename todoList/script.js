

let todoList = [];
if (localStorage.getItem('todo')){
    todoList = JSON.parse(localStorage.getItem('todo'));
    showTodoList();
}

function showTodoList() {
    let html = '';
    let ul = document.querySelector('#task-list');
    ul.innerHTML = "";
    for(let key in todoList) {
        let li = document.createElement('li');
        let liText = document.createTextNode(todoList[key].name);
        if (todoList[key].status) {
            li.className = 'checked';
        }
        li.appendChild(liText);
        li.setAttribute('data-id', todoList[key].id);
        createBtnClose(li);

        ul.appendChild(li);
    }
}


function Todo (name) {
    this.id =  function(){ return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }();
    this.name = name;
    this.status = false;
}

//create new task in taskList
let form = document.querySelector('form');
form.addEventListener('submit', () => {
    event.preventDefault();

    let task = form.querySelector('#add-task').value;
    if (task) {
        let todo = new Todo(task);
        todoList.push(todo);
        form.querySelector('#add-task').value = '';
        saveTodoListToLocalStorage(todoList);
        showTodoList();
    }

});

//add effects at click on LI
let list = document.querySelector('ul');
list.addEventListener('click', (event) => {
    if(event.target.tagName === 'LI') {
        event.target.classList.toggle('checked');
        changeStatus();
    }
}, false);

function changeStatus() {
    for (let i = 0; i < document.querySelectorAll('li').length; i++) {
        if (document.querySelectorAll('li')[i].classList.contains("checked")) {
            todoList[i].status = true;
        } else {
            todoList[i].status = false;
        }
        saveTodoListToLocalStorage(todoList);
    }
}

function createBtnClose (node) {
    let btn = document.createElement('span');
    let txt = document.createTextNode('x');
    btn.className = 'close';
    btn.appendChild(txt);
    node.appendChild(btn);
    btn.addEventListener('click', function() {
        let id = this.parentElement.getAttribute('data-id');
        this.parentElement.remove();
        let test = todoList.filter(item => item.id !== id);
        saveTodoListToLocalStorage(test);

    });
}

//save todoList to localStorage
function saveTodoListToLocalStorage(arr) {
    let str = JSON.stringify(arr);
    localStorage.setItem('todo', str);
}

document.querySelector('#clear').addEventListener('click', () => {
    todoList = JSON.parse(localStorage.getItem('todo'));
    if(todoList.length > 0) {
        todoList = [];
        localStorage.setItem('todo', JSON.stringify(todoList));
        document.getElementById('task-list').innerHTML = todoList;
    }
});
document.querySelector('#completed').addEventListener('click', () => {
    todoList = JSON.parse(localStorage.getItem('todo'));
    let html = '';
    for(let key in todoList) {
        if(todoList[key].status === true) {
            html+='<li class="checked">'+todoList[key].name+'<span class="close">x</span></li>';
        }
    }
    let ul = document.querySelector('#task-list');
    ul.innerHTML = html;

});
document.querySelector('#all').addEventListener('click', () => showTodoList());








