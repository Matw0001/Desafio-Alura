//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigos() {
    let input = document.querySelector('input');
    let nome = input.value.trim();

    if(nome == "") {
        alert('Ops! Digite um nome.')
        return;
    }

    if(amigos.includes(nome)) {
        alert('Esse nome já esta incluido.');
        return;
    }

    amigos.push(nome);
    input.value = "";
    ResultadoNomes();
    
}
