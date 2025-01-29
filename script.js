// Dados de usuários simulados (simulação)
const usuarios = [
    { username: "Fluminense", password: "Fluminense2002" }
];

// Função para fazer login
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const usuario = usuarios.find(usuario => usuario.username === username && usuario.password === password);

    const errorMessage = document.getElementById("error-message");

    if (usuario) {
        // Login bem-sucedido
        alert("Login bem-sucedido!");
        errorMessage.style.display = "none"; // Esconde a mensagem de erro
        document.getElementById("login-screen").style.display = "none"; // Oculta a tela de login
        document.getElementById("game-screen").style.display = "block"; // Exibe a tela do jogo (mercado de contratações)
        exibirJogadores(); // Exibe os jogadores no mercado
    } else {
        // Login falhou
        errorMessage.style.display = "block"; // Exibe a mensagem de erro
        errorMessage.textContent = "Usuário ou senha incorretos."; // Mensagem de erro
    }
});

// Função de logout
function logout() {
    document.getElementById("game-screen").style.display = "none"; // Oculta a tela do jogo
    document.getElementById("login-screen").style.display = "block"; // Exibe a tela de login
}

// Simulação de jogadores no mercado
let jogadores = [
    { nome: "Gabriel Barbosa", time: "Flamengo", valor: 50, foto: "https://via.placeholder.com/50" },
    { nome: "Marinho", time: "Flamengo", valor: 40, foto: "https://via.placeholder.com/50" },
    { nome: "Nenê", time: "Fluminense", valor: 35, foto: "https://via.placeholder.com/50" },
    { nome: "Gerson", time: "Flamengo", valor: 45, foto: "https://via.placeholder.com/50" },
    { nome: "Felipe Melo", time: "Palmeiras", valor: 30, foto: "https://via.placeholder.com/50" }
];

// Função para exibir jogadores disponíveis no mercado
function exibirJogadores() {
    const playersList = document.getElementById("players-list");
    playersList.innerHTML = ""; // Limpar lista antes de exibir novamente

    jogadores.forEach((jogador) => {
        const jogadorElement = document.createElement("div");
        jogadorElement.classList.add("player");
        jogadorElement.innerHTML = `
            <img src="${jogador.foto}" alt="${jogador.nome}" width="50">
            <strong>${jogador.nome}</strong> - Valor: ${jogador.valor} Reais
            <button class="contratar-btn" data-nome="${jogador.nome}">Contratar</button>
        `;
        playersList.appendChild(jogadorElement);

        // Adiciona a lógica de contratação ao botão
        jogadorElement.querySelector(".contratar-btn").addEventListener("click", function() {
            contratarJogador(jogador.nome);
        });
    });
}

// Função para contratar jogador
function contratarJogador(jogadorNome) {
    const jogador = jogadores.find(j => j.nome === jogadorNome);
    if (jogador) {
        alert(`${jogador.nome} foi contratado com sucesso!`);
    }
}
