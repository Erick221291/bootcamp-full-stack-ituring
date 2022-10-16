function gerarNumeroAl() {
    const min = 0;
    const max = 10000;
    const numero = Math.random()*(max - min) + 1
    return numero;
}
 console.log(gerarNumeroAl());