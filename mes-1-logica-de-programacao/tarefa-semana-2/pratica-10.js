let comparacaoDeNumeros = (numero1, numero2, numero3) => {
    if (numero1 >= numero2 && numero1 >=numero3) {
        console.log(`O número: ${numero1} é maior `);
    } else if (numero2 >= numero1 && numero2 >= numero3) {
        console.log(`O número: ${numero2} é maior `);
    } else {
        console.log(`O número: ${numero3} é maior `);
    }
}
comparacaoDeNumeros(5,70,71);