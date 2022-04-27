//seleção de DOM
const tarefa = document.querySelector('#gettask')

const button = document.querySelector("#buttonadd");

const current = document.querySelector("#currentlist")

console.log(tarefa)

//Escutando eventos

button.addEventListener('click', addTodo)

//funçoes
function addTodo(event){
    console.log('clicou')
}
