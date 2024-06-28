let palavra = prompt('Digite uma palavra:');

confirmarPalindromo();

function confirmarPalindromo() {
    // var palavra = 'radar';
    var palavraSeparadaPorLetra = palavra.split('');
    var palavraInvertida = palavraSeparadaPorLetra.reverse();
    palavraInvertida = palavraInvertida.join('');
    
    if (palavra == palavraInvertida) {
        alert ('A palavra ' + palavra + ' é um palíndromo.');
    } else {
        alert ('A palavra ' + palavra + ' não é um palíndromo.');
    }
}