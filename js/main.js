import botao from "./components/botao.js";
let tarefas = [
    {
        id: 1,
        done: true,
        txt: "aduysgdayusdhuaisdhusiad",
    },
    {
        id: 2,
        done: true,
        txt: "tarefa 2 ",
    },
    {
        id: 3,
        done: true,
        txt: "tarefa 2dayusdhuaisdhusiad",
    },
    {
        id: 4,
        done: true,
        txt: "aduysgdayusdhuaeqw 3 isdhusiad",
    },
    {
        id: 5,
        done: true,
        txt: "aduysgdayusdhuai5 5  sdhusiad",
    },
];
function carregarTarefas() {
    if (localStorage.getItem("tasks")) {
        tarefas = JSON.parse(localStorage.getItem("tasks"));
    } else {
        tarefas = [];
    }
}

function renderizarTarefas() {
    let html = "";
    
    tarefas.forEach((tarefa) => {
        html += botao(tarefa);
    });
    document.getElementById("tarefas").innerHTML = html;
}
renderizarTarefas();
