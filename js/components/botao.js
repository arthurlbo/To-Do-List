export default function (tarefa) {
    const bgStyle = tarefa.done
        ? "bg-success text-decoration-line-through"
        : "bg-danger";
    return `
<div 
    id="${tarefa.id}"
    class="toast align-items-center ${bgStyle} text-white border-0 show mt-4 d-flex justify-content-between btn"  -live="assertive" aria-atomic="true>
    <div class="d-flex">
        <div class="toast-body">${tarefa.txt}</div>
        <button
            type="button"
            class="btn-close btn-close-white me-2 m-auto"
        ></button>
    </div>
</div>
`;
}
