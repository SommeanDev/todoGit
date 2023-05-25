/*let addTask = document.getElementsByTagName('button');
let inputText = document.getElementById('inputText');
let tasks = document.getElementById('tasks');

function add() {
    var task = document.createElement('li');
    task.innerHTML = inputText.value;
    tasks.appendChild(task);
    inputText.value = '';
    let serial_task = JSON.stringify(tasks);
    console.log(serial_task);
    localStorage.setItem('tasks', serial_task);
}

function show(){
    console.log(localStorage.getItem('tasks'));
}

/*window.onload = function(){
    var task2 = JSON.parse(localStorage.getItem('tasks'));
    console.log(task2);
    tasks.innerHTML = task2;
};*/


const addbtn = document.getElementById('addTask');
let inputText = document.getElementById('inputText');
let tasks = document.getElementById('tasks');

let defaultPara = document.createElement('p');
defaultPara.innerText = "Add Tasks to see them here...";
tasks.appendChild(defaultPara);


function add() {
    var task = document.createElement('li');
    task.innerHTML = inputText.value;
    if (tasks.contains(defaultPara)) {
        tasks.removeChild(defaultPara);
    } // remove default
    tasks.appendChild(task); // add task
    inputText.value = '';
    console.log(task);
}

addbtn.addEventListener('click', add);
