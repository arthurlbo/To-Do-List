import tarefas from "./data";
import classeAtual from "./data";
import tarefa from "./components/botao";
import botao from "./components/botao";
import cadastrarTarefa from "./gerenciarTarefas";
import carregarTarefas from "./gerenciarTarefas";
import salvarTarefas from "./gerenciarTarefas";
import renderizarTarefas from "./gerenciarTarefas";
import concluirTarefa from "./gerenciarTarefas";
import deletarTarefa from "./gerenciarTarefas";
import barraProgresso from "./components/barraDeProgresso";
import uuidv4 from "./utils/geradorId";

//import _, { forEach } from "lodash";

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
