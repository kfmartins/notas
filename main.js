function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Por favor, insira todas as notas!');
        return;
    }

    const media = (nota1 + nota2 + nota3) / 3;
    const resultado = document.getElementById('resultado');

    if (media >= 7) {
        resultado.textContent = `Média: ${media.toFixed(2)} - Aprovado!`;
        resultado.className = 'aprovado';
    } else {
        resultado.textContent = `Média: ${media.toFixed(2)} - Reprovado!`;
        resultado.className = 'reprovado';
    }
}
