function gerarNovaSenha() {
    const inputSenha = document.getElementById('senhaInput').value;
    const elementoResultado = document.getElementById('novaSenha');

    // Valida se a entrada contém apenas números
    if (!/^\d+$/.test(inputSenha)) {
        elementoResultado.textContent = "Digite apenas números!";
        elementoResultado.style.color = "#dc3545"; // Vermelho para erro
        return;
    }

    // Aplica a inversão digital (9 - dígito) para cada caractere
    const novaSenha = inputSenha
        .split('')
        .map(digito => 9 - Number(digito))
        .join('');

    elementoResultado.textContent = novaSenha;
    elementoResultado.style.color = "#28a745"; // Verde para sucesso
}
