const tarefa = [];

function addtarefa(){
    const text = document.getElementById('input')
    if (inptarefa.value !== ''){
        const novatarefa = input.value;
        input.value = '';
        tarefa.push({
            id:tarefa.length,
            name:text,
            done: false,
        });
        mostralistas();
    }
}

