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
    {
        id: 6,
        done: true,
        txt: "aduysgdayusdhuai5 5  sdhusiad",
    },
    {
        id: 7,
        done: true,
        txt: "aduysgdayusdhuai5 5  sdhusiad",
    },
    {
        id: 8,
        done: true,
        txt: "aduysgdayusdhuai5 5  sdhusiad",
    },
    {
        id: 9,
        done: true,
        txt: "aduysgdayusdhuai5 5  sdhusiad",
    },
    {
        id: 10,
        done: true,
        txt: "aduysgdayusdhuai5 5  sdhusiad",
    },
    {
        id: 11,
        done: true,
        txt: "aduysgdayusdhuai5 5  sdhusiad",
    },
    {
        id: 12,
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
    for (let i = 1; i <= tarefas.length; i++) {
        if (i % 3 == 0) {
            html += '<div class="row">';
            console.log("\t.");
        }
        const tarefa = tarefas[i - 1];
        html += `<div class="col">${botao(tarefa)}</div>`
        console.log('\t.')
        if (i % 3 == 0) {
            html += '</div>';
            console.log("fechando rows");
        }
    }
    document.getElementById("tarefas").innerHTML = html;
}
renderizarTarefas();
