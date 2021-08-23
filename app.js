/*
 * Title: Simple To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: K.M FOYSAL
 * Date: 23/08/2021
 *
 */

let inputTask = document.getElementById('input-task');
let addTask = document.getElementById('addTask');
let toDoUl = document.getElementById('items');
let completeTask = document.getElementById('complete-task');

function createTask(task){
    let listItem = document.createElement('li');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    checkBox.type = 'checkbox';
    label.innerText = task;

    listItem.classList.add('text-lg', 'mb-1');
    label.classList.add('ml-2');

    listItem.appendChild(checkBox);
    listItem.appendChild(label);

    return listItem;

}

document.getElementById('addTask').addEventListener
('click', function(event){
    event.preventDefault();
    let listItem = createTask(inputTask.value);
    toDoUl.appendChild(listItem);
    inputTask.value = '';
})

toDoUl.addEventListener('click', function(event){
    
    if(event.target.tagName.toLowerCase() == 'li'){
        event.target.style.remove();  
    }
    else{
        event.target.parentNode.remove();
    }
    completeTask.appendChild(event.target.parentNode);

    
})