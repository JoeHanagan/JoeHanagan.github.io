const list = document.getElementById('todo-list')
const text = document.getElementById('new-todo')
const submit = document.getElementById('todo-btn')

const todos = JSON.parse(localStorage.getItem('todo-list')) || []

const renderTodo = () => {
    list.innerHTML = ''
    const todos = JSON.parse(localStorage.getItem('todo-list')) || []
    todos.forEach(element => {
        const li = document.createElement('li')
        li.textContent = element.text
        list.append(li)
    })
}

submit.addEventListener("click", () => {
    const input = text.value
    const newObject = {"text": `${input}`, "completed": false}
    todos.push(newObject)
    localStorage.setItem('todo-list',JSON.stringify(todos))
    renderTodo()
    text.value = ''
});

renderTodo();