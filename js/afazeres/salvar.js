import { Data } from "../util/data.js";

export default function salvarTarefas() {
    localStorage.setItem("tasks", JSON.stringify(Data.tarefas));
}
export function carregarTarefas() {
    if (localStorage.getItem("tasks")) {
        Data.tarefas = JSON.parse(localStorage.getItem("tasks"));
    } else {
        Data.tarefas = [];
    }
}
