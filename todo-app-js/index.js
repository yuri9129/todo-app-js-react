const createElementWithClass = (element, className) => {
    const newElement = document.createElement(element);
    newElement.className = className;
    return newElement;
}

const queryListItem = (e) => e.target.closest('li');
const queryListRowItem = (li) => li.querySelector("div.list-row");
const queryIncompleteList = () => document.querySelector("div.incomplete-area").querySelector("ul");
const queryCompleteList = () => document.querySelector("div.complete-area").querySelector("ul");
const queryTodoTitle = (e) => e.querySelector("p.todo-item").innerText


const createTodoTemplate = (todoTitle) => {
    const li = createElementWithClass('li', '');
    const div = createElementWithClass('div', 'list-row')
    const p = createElementWithClass('p', 'todo-item');
    p.innerText = todoTitle;

    li.appendChild(div);
    div.appendChild(p);

    return li;
}

const createButton = (innerText, clickHandler) => {
    const button = createElementWithClass('button', '');
    button.innerText = innerText;
    button.addEventListener('click', clickHandler);
    return button;
}

const createIncompleteTodo = (todoTitle) => {
    const li = createTodoTemplate(todoTitle);
    const div = queryListRowItem(li);

    const completeButton = createButton("完了", clickCompleteButton);
    div.appendChild(completeButton);

    const deleteButton = createButton("削除", clickDeleteButton);
    div.appendChild(deleteButton);

    queryIncompleteList().appendChild(li);
}

const createCompleteTodo = (todoTitle) => {
    const li = createTodoTemplate(todoTitle);
    const div = li.querySelector("div.list-row");

    const backButton = createButton("戻る", clickBackButton);
    div.appendChild(backButton);

    queryCompleteList().appendChild(li);
}

const clickCompleteButton = (e) => {
    const targetElement = queryListItem(e);
    const todoTitle = queryTodoTitle(targetElement);
    targetElement.remove();
    createCompleteTodo(todoTitle);
}

const clickDeleteButton = (e) => {
    const targetElement = queryListItem(e);
    targetElement.remove();
}

const clickBackButton = (e) => {
    const targetElement = queryListItem(e);
    const todoTitle = queryTodoTitle(targetElement);
    targetElement.remove();
    createIncompleteTodo(todoTitle);
}



document.getElementById("add-button").addEventListener("click", function(){
    const input = this.parentElement.querySelector("input#add-text")
    const todoTitle = input.value
    input.value = ""
    createIncompleteTodo(todoTitle);
});

