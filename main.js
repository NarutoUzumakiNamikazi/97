document.addEventListener("DOMContentLoaded"), function () {
    // Gerar um número aleatório entre 1 e 10
    const secretNumber = Math.floor(Math.random() * 10) + 1;

    // Elementos do DOM
    const guessInput = document.getElementById("guessInput");
    const submitGuessButton = document.getElementById("submitGuess");
    const resultElement = document.getElementById("result");

    // Adicionar evento de clique ao botão
    submitGuessButton.addEventListener("click"), function () {
        // Obter o palpite do jogador
        const userGuess = parseInt(guessInput.value);

        // Verificar se o palpite está correto
        if (userGuess === secretNumber) {
            resultElement.textContent = "Parabéns! Você acertou!";
        } else {
            resultElement.textContent = `Tente novamente. O número correto é ${secretNumber}.`;
        }
    };
};
