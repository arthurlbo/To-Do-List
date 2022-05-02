import { Data } from "../util/data";

export default function barraProgresso() {
    const elemento = document.getElementById("barra-progresso");

    if (Data.tarefas.length > 0) {
        const porcentagem = Math.round(
            (Data.tarefas.filter((t) => t.done).length / Data.tarefas.length) *
                100
        );

        elemento.innerHTML = `${porcentagem}%`;
        elemento.style.width = `${porcentagem}%`;

        if (porcentagem <= 30) {
            elemento.classList.replace(Data.classeAtual, "bg-danger");
            Data.classeAtual = "bg-danger";
        } else if (porcentagem > 30 && porcentagem <= 70) {
            elemento.classList.replace(Data.classeAtual, "bg-warning");
            Data.classeAtual = "bg-warning";
        } else {
            elemento.classList.replace(Data.classeAtual, "bg-success");
            Data.classeAtual = "bg-success";
        }
    } else {
        elemento.innerHTML = "";
        elemento.style.width = "0";
    }
}
