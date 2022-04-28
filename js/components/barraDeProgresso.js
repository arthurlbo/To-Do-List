import { tarefas} from "../data";
import { classeAtual } from "../data";

export function barraProgresso() {
    const elemento = document.getElementById("barra-progresso");

    if (tarefas.length > 0) {
        const porcentagem = Math.round(
            (tarefas.filter((t) => t.done).length / tarefas.length) * 100
        );

        elemento.innerHTML = `${porcentagem}%`;
        elemento.style.width = `${porcentagem}%`;

        if (porcentagem <= 30) {
            elemento.classList.replace(classeAtual, "bg-danger");
            let classeAtual = "bg-danger";
        } else if (porcentagem > 30 && porcentagem <= 70) {
            elemento.classList.replace(classeAtual, "bg-warning");
           let classeAtual = "bg-warning";
        } else {
            elemento.classList.replace(classeAtual, "bg-success");
           let classeAtual = "bg-success";
        }
    } else {
        elemento.innerHTML = "";
        elemento.style.width = "0";
    }
}


