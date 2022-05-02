import { Data } from "../util/data.js";
import uu from "../util/gerarid";
import _, { forEach } from "lodash";
import botao from "../components/botao";
import barraProgresso from "../components/barra.js";
import salvarTarefas from "./salvar";

export function cadastrarTarefas() {
    const input = document.querySelector("#gettask");

    if (input.value !== "") {
        const texto = input.value;
        input.value = "";
        Data.tarefas.push({
            id: uu(),
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
    Data.tarefas.forEach((tarefa) => {
        html += botao(tarefa);
    });
    document.getElementById("tarefas").innerHTML = html;
}

export function concluirTarefas(id) {
    for (let i = 0; i < Data.tarefas.length; i++) {
        if (Data.tarefas[i].id == id) {
            Data.tarefas[i].done = !Data.tarefas[i].done;
        }
    }
    salvarTarefas();
    renderizarTarefas();
    barraProgresso();
}

export function deletarTarefas(id) {
    Data.tarefas = _.remove(Data.tarefas, (t) => {
        return t.id != id;
    });
    salvarTarefas();
    renderizarTarefas();
}
