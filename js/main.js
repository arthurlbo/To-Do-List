import botao from "./components/botao.js";
import _, { forEach } from "lodash";
let tarefas = [];

function carregarTarefas() {
    if (localStorage.getItem("tasks")) {
        tarefas = JSON.parse(localStorage.getItem("tasks"));
    } else {
        tarefas = [];
    }
}
//https://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid
function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
        (
            c ^
            (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
        ).toString(16)
    );
}

function salvarTarefas() {
    localStorage.setItem("tasks", JSON.stringify(tarefas));
}

function deletarTarefa(id) {
    tarefas = _.remove(tarefas, (t) => {
        return t.id != id;
    });
    salvarTarefas();
    renderizarTarefas();
}

function cadastrarTarefa() {
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
    }
}

function renderizarTarefas() {
    let html = "";

    tarefas.forEach((tarefa) => {
        html += botao(tarefa);
    });
    document.getElementById("tarefas").innerHTML = html;
}

function concluirTarefa(id) {
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].id == id) {
            tarefas[i].done = !tarefas[i].done;
    
        }
    }
   let checar = tarefas.done
    salvarTarefas();
    renderizarTarefas();
}

function checarProgresso(tarefas){
    for (let i = 0; i < tarefas.length; i++) {
    return tarefas[i] = true;
    }
}

function barraProgresso(){
    let meuProgresso= tarefas.filter(checarProgresso);
    console.log('tarefas completas', meuProgresso);
}

carregarTarefas();
renderizarTarefas();
barraProgresso();

document.cadastrarTarefa = cadastrarTarefa;
document.deletarTarefa = deletarTarefa;
document.concluirTarefa = concluirTarefa;
