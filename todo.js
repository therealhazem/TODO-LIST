// Load tasks from localStorage or set default tasks
let tasks_data = JSON.parse(localStorage.getItem("tasks")) || [
    { "task": "task1", "status": "" },
    { "task": "task2", "status": "" },
    { "task": "task3", "status": "" }
];

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks_data));
}

// Write tasks to the page
function writetasks() {
    document.querySelector("#tasks_div").innerHTML = '';
    let index = 0;
    for (let taskk of tasks_data) {
        document.querySelector("#tasks_div").innerHTML += `
        <div class="task ${taskk.status}">
            <p class="text-[1.3vw] font-medium basis-3/4">${taskk.task}</p>
            <div class="flex space-x-3 text-[1.2vw] font-medium items-center justify-center">
                <button class="done-button">Done</button>
                <button onclick="deletethistask(${index})" class="delete-button">Delete</button>
                <button onclick="editthistask(${index})" class="edit-button">Edit</button> 
            </div>
        </div>
        `;
        index++;
    }
    uifunctions();
}

// Delete a task (with 3s delay)
function deletethistask(index) {
    let sure = confirm("Are you sure you want to delete this Task?");
    if (sure) {
        setTimeout(() => {
            tasks_data.splice(index, 1);
            saveTasks();  
            writetasks();
        }, 3000);
    }
}

// Edit a task
function editthistask(index) {
    let theEdit = prompt("Edit your task here:");
    if (theEdit) {
        tasks_data[index].task = theEdit;
        saveTasks(); 
    }
    writetasks();
}

// Update UI functions
function uifunctions() {
    document.querySelectorAll(".task").forEach((task) => {
        let donetask = task.querySelector(".done-button");
        let deletetask = task.querySelector(".delete-button");
        let edittask = task.querySelector(".edit-button");
        let tasktext = task.querySelector("p").innerHTML;
        
        donetask.addEventListener("mouseover", changedone);
        donetask.addEventListener("mouseout", returndone);
        donetask.addEventListener("click", clickdone);
        
        deletetask.addEventListener("mouseover", changedelete);
        deletetask.addEventListener("mouseout", returndelete);
        
        edittask.addEventListener("mouseover", changeedit);
        edittask.addEventListener("mouseout", returnedit);
        edittask.addEventListener("click", clickedit);
        
        // done ui functions
        function changedone(){
            task.classList.add("done");
            task.classList.remove("task");
        }
        function returndone(){
            task.classList.add("task");
            task.classList.remove("done");
        }
        function clickdone(){
            task.classList.remove("deletee");
            task.classList.remove("editt");
            task.classList.toggle("donee");
            for(let done of tasks_data){
                if(done.task == tasktext && done.status == ""){
                    done.status = "donee";
                } else if(done.task == tasktext && done.status == "donee"){
                    done.status = "";
                }
            }
            saveTasks();
        }
        
        // delete ui functions
        function changedelete(){
            task.classList.add("delete");
            task.classList.remove("task");
        }
        function returndelete(){
            task.classList.add("task");
            task.classList.remove("delete");
        }

        // edit ui functions
        function changeedit(){
            task.classList.add("edit");
            task.classList.remove("task");
        }
        function returnedit(){
            task.classList.add("task");
            task.classList.remove("edit");
        }
        function clickedit(){
            task.classList.remove("donee");
            task.classList.remove("deletee");
            task.classList.toggle("editt");
        }
    });
}

// Add new task
function addnewtask() {
    let theNewTask = prompt("Enter the new task you want to add!");
    if (theNewTask) {
        tasks_data.push({ "task": theNewTask, "status": "" });
        saveTasks(); 
        writetasks();
    }
}

document.querySelector("#add").addEventListener("click", addnewtask);

writetasks();
