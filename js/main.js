import uu from "./util/gerarid";
import { Data } from "./util/data.js";
import botao from "./components/botao.js";
import barraProgresso from "./components/barra.js";
import salvarTarefas from "./afazeres/salvar.js";
import { carregarTarefas } from "./afazeres/salvar.js";
import { renderizarTarefas } from "./afazeres/operacoesTarefas.js";
import { cadastrarTarefas } from "./afazeres/operacoesTarefas.js";
import { deletarTarefas } from "./afazeres/operacoesTarefas.js";
import { concluirTarefas } from "./afazeres/operacoesTarefas.js";

// Atribuição da tecla "enter" para cadastrar as tarefas
document.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        cadastrarTarefas();
    }
});

carregarTarefas();
renderizarTarefas();
barraProgresso();

document.cadastrarTarefas = cadastrarTarefas;
document.deletarTarefas = deletarTarefas;
document.concluirTarefas = concluirTarefas;
document.barraProgresso = barraProgresso;
