import botao from "./components/botao.js";
import _, { forEach } from "lodash";
import uu from"./util/gerarid"
let tarefas = [];
let classeAtual = "bg-danger";

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
    tarefas = _.remove(tarefas, (t) => {
        return t.id != id;
    });
    salvarTarefas();
    renderizarTarefas();
}

function cadastrarTarefa() {                             
    const input = document.querySelector("#gettask");   
//variavel input armazena o que foi digitado no formulario 
    if (input.value !== "") {
        const texto = input.value; 
        input.value = ""; 
        tarefas.push({
            id: uu(),
            txt: texto,
            done: false,
        });
        salvarTarefas();
        renderizarTarefas();
        barraProgresso();
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
    salvarTarefas();
    renderizarTarefas();
    barraProgresso();
}

function barraProgresso() {
    const elemento = document.getElementById("barra-progresso");

    if (tarefas.length > 0) {

         const porcentagem = Math.round(
             (tarefas.filter((t) => t.done).length / tarefas.length) * 100
         );

         elemento.innerHTML = `${porcentagem}%`;
         elemento.style.width = `${porcentagem}%`;

         if (porcentagem <= 30) {
             elemento.classList.replace(classeAtual, "bg-danger");
             classeAtual = "bg-danger";
         } else if (porcentagem > 30 && porcentagem <= 70) {
             elemento.classList.replace(classeAtual, "bg-warning");
             classeAtual = "bg-warning";
         } else {
             elemento.classList.replace(classeAtual, "bg-success");
             classeAtual = "bg-success";
         }
    }else{
        elemento.innerHTML = '';
        elemento.style.width = '0';
    }
}

    document.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
        

            cadastrarTarefa();
        }
    });
   

carregarTarefas();
renderizarTarefas();
barraProgresso();

document.cadastrarTarefa = cadastrarTarefa;
document.deletarTarefa = deletarTarefa;
document.concluirTarefa = concluirTarefa;
document.barraProgresso = barraProgresso;
