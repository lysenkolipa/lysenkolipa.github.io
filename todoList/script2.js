var myApp = myApp || {};

let myApp.todoList = {
    q: document.querySelector,
    option: {
        todoListContainer: '#todoList',
    },
    events: function () {
        this.q('#clear').addEventListener('click', function(event) {
            todoList = JSON.parse(localStorage.getItem('todo'));
            if(todoList.length > 0) {
                todoList = [];
                localStorage.setItem('todo', JSON.stringify(todoList));
                document.getElementById('task-list').innerHTML = todoList;
            }
        });
        this.q('#completed').addEventListener('click', function(event) {
            todoList = JSON.parse(localStorage.getItem('todo'));
            // console.log(todoList);
            let html = '';
            for(let key in todoList) {
                if(todoList[key].status === true) {
                    html+='<li class="checked">'+todoList[key].name+'<span class="close">x</span></li>';
                }
            }
            let ul = document.querySelector('#task-list');
            ul.innerHTML = html;

        });
        this.q('#all').addEventListener('click', function(event) {
            this.showTodoList();
        });
    },

    showTodoList: function () {
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
    },

    changeStatus: function () {
            if (this.classList.contains("checked")) {
                todoList[i].status = true;
            } else {
                todoList[i].status = false;
            }
            this.saveTodoListToLocalStorage();
        }
    },

    createBtnClose: function () {
        let btn = document.createElement('span');
        let txt = document.createTextNode('x');
        btn.className = 'close';
        btn.appendChild(txt);
        node.appendChild(btn);
        btn.addEventListener('click', () => {
            let id = this.parentElement.getAttribute('data-id');
            this.parentElement.remove();
            let test = todoList.filter(item => item.id !== id);
            this.saveTodoListToLocalStorage();
        });
    },

    saveTodoListToLocalStorage: function () {
        let str = JSON.stringify();
        localStorage.setItem('todo', str);
    },

    init: function() {
        this.events();
    }
}

document.addEventListener('DOMContentLoaded', function(){

    myApp.todoList.init()

}, false)