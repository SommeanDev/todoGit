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
let clear = document.getElementById('clear');

let defaultPara = document.createElement('p');
defaultPara.innerText = "Add Tasks to see them here...";
defaultPara.style.padding = "5rem";
tasks.appendChild(defaultPara);

function saveTasks(){
    var taskData = document.getElementsByTagName('li');
    var tasklist = [];
    for (var i = 0; i < taskData.length; i++) {
        tasklist.push(taskData[i].innerText);
    }
    localStorage.setItem('taskList', JSON.stringify(tasklist)); 
}

function loadTasks(){
    var taskData = JSON.parse(localStorage.getItem('taskList'));
    console.log(taskData);
    tasks.innerHTML = '';
    tasks.appendChild(defaultPara);
    if (taskData && taskData.length > 0) {
        if (tasks.contains(defaultPara)) {
            tasks.removeChild(defaultPara);
        }
    
        for (var i = 0; i < taskData.length; i++) {
            var tasklist = document.createElement('li');
            tasklist.innerHTML = taskData[i];
            tasks.appendChild(tasklist);
        }
    }    
}
var index = 1;
function add() {
    var task = document.createElement('li');
    task.innerText = index + ". " + inputText.value;
    index++;
    if (tasks.contains(defaultPara)) {
        tasks.removeChild(defaultPara);
    } // remove default
    tasks.appendChild(task); // add task
    inputText.value = '';
    console.log(task);
    saveTasks();
}

/*function clearTasks() {
    tasks.innerHTML = '';
    localStorage.removeItem('taskList');
    tasks.appendChild(defaultPara);
    index = 1;
}*/

function clearTasks() {
    tasks.innerHTML = '';
    localStorage.removeItem('taskList');
    tasks.appendChild(defaultPara);
    index = 1;
}

clear.addEventListener('click', clearTasks);
addbtn.addEventListener('click', add); // add button click
window.addEventListener('load', loadTasks); // load tasks