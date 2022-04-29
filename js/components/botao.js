export default function (tarefa) {
    const bgStyle = tarefa.done
        ? "bg-success text-decoration-line-through"
        : "bg-danger";
    return `
<div 
    id="${tarefa.id}"
    class="toast align-items-center ${bgStyle}  border-0 show mt-4 d-flex justify-content-between btn" onclick="concluirTarefas('${tarefa.id}')" -live="assertive" aria-atomic="true>
    <div class="d-flex">
        <div class="toast-body text-black h5">${tarefa.txt}</div>
        <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
            onclick="deletarTarefas('${tarefa.id}')"
        ></button>
    </div>
</div>
`;
}
