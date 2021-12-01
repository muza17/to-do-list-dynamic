//selectors
var todoInput = document.querySelector(".TDL__input");
var todoButton = document.querySelector(".TDL__btn");
var todoList = document.querySelector(".TDL__list");
var sortOption = document.querySelector(".sort-todo")
var savingArray = [];

//listeners

todoInput.addEventListener('keyup', function(event){
    event.preventDefault();
    if (event.keyCode === 13) {
        todoButton.click();
        
    }
});
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
sortOption.addEventListener('click', sortTodo);


//functions 

//1)adding todos
function addTodo(e){
    e.preventDefault();
    if(todoInput.value.length > 3){
        //item
        var todoDiv = document.createElement("div");
        todoDiv.classList.add("TDL__list-todo");
        todoDiv.classList.add("TDL__todo");
        //li
        var newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add("TDL__todo-item");
        todoDiv.appendChild(newTodo);
        //check button
        var checkedBtn = document.createElement("button");
        checkedBtn.innerHTML = 'done';
        checkedBtn.classList.add("TDL__todo-checkBtn");
        todoDiv.appendChild(checkedBtn);
        //delete button
        var deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = 'delete';
        deleteBtn.classList.add("TDL__todo-deleteBtn");
        todoDiv.appendChild(deleteBtn);
    
        todoList.appendChild(todoDiv);
        saveToArray(todoInput.value);
        todoInput.value = "";

    }else{
        alert("type with more signs");
        todoInput.value = "";
    }
}

//2)saving inputs to array
function saveToArray(item){
    
    savingArray.push(item);
    console.log(savingArray);
}

//3)making checked and deleted
function deleteCheck(e){
    const item = e.target;

    if(item.classList[0]==="TDL__todo-deleteBtn"){
        var deletedItem = item.parentElement;
        deletedItem.classList.add("down");
        deletedItem.addEventListener('transitionend', function(e){

            deletedItem.remove();
        })
    }

    if(item.classList[0]==="TDL__todo-checkBtn"){
        var deletedItem = item.parentElement;
        deletedItem.classList.toggle("done");
    }
}


//4)sorting and showing according to completed, uncompleted

//is not working properly; todo is undefined
function sortTodo(e){
    var todos = todoList.childNodes;
    todos.forEach(function(todo){
        var todo;
        switch(e.target.value){
            case "all":
                todo.style.display = "flex";
                break;
             case "completed":
                 if(todo.classList.contains('done')){
                     todo.style.display = "flex";
                 }else{
                    todo.style.display = "none"; 
                 }
                 break;
            case "uncompleted": 
                 if(!todo.classList.contains('done')){
                    todo.style.display = "flex";
                 }else{
                    todo.style.display = "none"; 
                 }
                 break;
        }
    });
}