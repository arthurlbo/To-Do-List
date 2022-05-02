import botao from "./components/botao.js";
import uu from "./util/gerarid";
import {Data} from "./util/data.js"
import cadastrarTarefas from "./afazeres/cadastrar.js";
import salvarTarefas from "./afazeres/salvar.js";
import renderizarTarefas from "./afazeres/renderizar.js";
import barraProgresso from "./components/barra.js";
import { carregarTarefas } from "./afazeres/salvar.js";
import { deletarTarefas } from "./afazeres/cadastrar.js";
import { concluirTarefas } from "./afazeres/cadastrar.js";
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

