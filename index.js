const taskInput = document.querySelector('#task__name');
const taskForm = document.querySelector('#task__adderPanel');
const taskCollection = document.querySelector('#collect');
const collection = document.querySelector('#collect');
const deleteAll = document.querySelector('#delete__all');
const alertAsk = document.querySelector('.alert__ask');
const con = document.querySelector('.container');
const yesBtn = document.querySelector('#yes__btn');
const noBtn = document.querySelector('#no__btn');
const filter = document.querySelector('#task__filter');




taskForm.addEventListener('submit', addTask);

function addTask(e) {
    const li = document.createElement('li');
    const p = document.createElement('p');
    const a = document.createElement('a');

    p.appendChild(document.createTextNode(taskInput.value));
    li.appendChild(p);
    li.className = "task";

    a.innerHTML = '<i class = "fas fa-trash"></i>';
    li.appendChild(a);
    collection.appendChild(li);
    taskInput.value = '';
    a.addEventListener('click', deleteTask);

    function deleteTask(e) {
        if (e.target.parentElement.parentElement.classList.contains("task")) {
            e.target.parentElement.parentElement.remove();
        }
    }
    filter.addEventListener('keyup', filterTasks)
    function filterTasks(e) {
        const text = e.target.value.toLowerCase();
        document.querySelectorAll(".task").forEach(
            function (task) {
                const item = task.firstChild.textContent;
                if (item.toLowerCase().indexOf(text) != -1) {
                    task.style.display = "flex";
                }
                else {
                    task.style.display = "none";
                }
            }
        )

    }




    const liOfcreated = document.querySelectorAll('.task');
    const empty = [];
    liOfcreated.forEach(liText => {
        empty.push(liText.firstChild.textContent.toUpperCase);
    })
    console.log(empty);

    e.preventDefault();















    // if (taskInput.value === '') {
    //     alert("Please enter some word!");
    // } else {
    //     const li = document.createElement('li');
    //     const p = document.createElement('p');
    //     const a = document.createElement('a');
    //     a.innerHTML = '<i class="fas fa-trash"></i>'
    //     a.className = "delete__action";
    //     p.appendChild(document.createTextNode(taskInput.value));
    //     li.className = "task";
    //     li.appendChild(p);
    //     li.appendChild(a);

    //     taskCollection.appendChild(li);
    //     taskInput.value = '';
    //     a.addEventListener('click', deleteTask);

    //     function deleteTask(e) {
    //         if (e.target.parentElement.classList.contains("delete__action")) {
    //             e.target.parentElement.parentElement.remove();
    //         }
    //     }
    // }

    // e.preventDefault();
}
deleteAll.addEventListener('click', () => {

    // collection.innerHTML = '';
    // while (collection.firstChild) {
    //     collection.removeChild(collection.firstChild);
    // }
    alertAsk.style.display = `flex`;
    con.style.display = `none`;
});

yesBtn.addEventListener('click', () => {
    alertAsk.style.display = `none`;
    con.style.display = `block`;
    while (collection.firstChild) {
        collection.removeChild(collection.firstChild);
    }
});

noBtn.addEventListener('click', () => {
    alertAsk.style.display = `none`;
    con.style.display = `block`;
});