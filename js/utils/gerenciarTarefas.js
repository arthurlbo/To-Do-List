import { remove } from "lodash";
import { uuidv4 } from "../utils/geradorId";
import botao from "../components/botao";

export function carregarTarefas() {
    if (localStorage.getItem("tasks")) {
        tarefas = JSON.parse(localStorage.getItem("tasks"));
    } else {
        tarefas = [];
    }
}

export function salvarTarefas() {
    localStorage.setItem("tasks", JSON.stringify(tarefas));
}

export function cadastrarTarefa() {
    const input = document.querySelector("#gettask");

    if (input.value !== "") {
        const texto = input.value;
        input.value = "";
        tarefas.push({
            id: uuidv4(),
            txt: texto,
            done: false,
        });
        salvarTarefas();
        renderizarTarefas();
        barraProgresso();
    }
}

export function renderizarTarefas() {
    let html = "";

    tarefas.forEach((tarefa) => {
        html += botao(tarefa);
    });
    document.getElementById("tarefas").innerHTML = html;
}

export function concluirTarefa(id) {
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id == id) {
            tarefas[i].done = !tarefas[i].done;
        }
    }
    salvarTarefas();
    renderizarTarefas();
    barraProgresso();
}

export function deletarTarefa(id) {
    tarefas = remove(tarefas, (t) => {
        return t.id != id;
    });
    salvarTarefas();
    renderizarTarefas();
}
