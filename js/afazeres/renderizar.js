import { Data } from "../util/data.js";
import botao from "../components/botao.js";

export default function renderizarTarefas() {
    let html = "";
    Data.tarefas.forEach((tarefa) => {
        html += botao(tarefa);
    });
    document.getElementById("tarefas").innerHTML = html;
}
