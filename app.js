//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let input = document.querySelector("input");
    let nome = input.value.trim();

    if(nome === "") {
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
adicionarAmigo();

function ResultadoNomes() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = "";
    
    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    let resultado = document.querySelector("#resultado");
    if(amigos.length < 2) {
        resultado.textContent = "Adicione pelo menos dois amigo para sortear";
        return;
    }
    let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = `o amigo sorteado é: ${sorteado}`;
    
}