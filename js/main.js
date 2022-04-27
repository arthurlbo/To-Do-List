import botao from "./components/botao.js";
let tarefas = [];

function carregarTarefas() {
    if (localStorage.getItem("tasks")) {
        tarefas = JSON.parse(localStorage.getItem("tasks"));
    } else {
        tarefas = [];
    }
}

function salvarTarefas() {
    localStorage.setItem("tasks", JSON.stringify(tarefas));
}

function deletarTarefa(id) {

    
}

function cadastrarTarefa() {
    const input = document.querySelector("#gettask");

    if (input.value !== "") {
        const texto = input.value;
        input.value = "";
        tarefas.push({
            id: tarefas.length,
            txt: texto,
            done: false,
        });
        salvarTarefas();
        renderizarTarefas();
    }
}

function renderizarTarefas() {
    let html = "";

    tarefas.forEach((tarefa) => {
        html += botao(tarefa);
    });
    document.getElementById("tarefas").innerHTML = html;
}
carregarTarefas();
renderizarTarefas();

document.cadastrarTarefa = cadastrarTarefa;
