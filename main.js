const tarefas = [];

function lerInput() {
    const input = document.getElementById("input");
    if (input.value !== "") {
        const texto = input.value;
        input.value = "";
        tarefas.push({
            id: tarefas.length,
            name: texto,
            done: false,
        });
        renderizaAsListas();
    }
}

function concluirTarefa(id) {
    console.log(tarefas);
    tarefas.forEach((tarefa) => {
        if (tarefa.id === id) {
            tarefa.done = true;
        }
    });
    renderizaAsListas();
}

function renderizaAsListas() {
    let texto = "<ul>";
    tarefas.forEach((element) => {
        texto += `<li ${
            element.done ? "class='text-decoration-line-through'" : ""
        }>${element.name}</li> <button onClick="concluirTarefa(${
            element.id
        })">✔️</button>`;
    });
    texto += "</ul>";
    document.getElementById("listas").innerHTML = texto;
}
