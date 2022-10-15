let ValorComDesconto = function(valorReais , percentual){
    const desconto = valorReais * percentual;
    const valorFinal = valorReais - desconto;
    console.log(`Valor Total: ${valorReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} \nValor Total com desconto: ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
}

let r = 300.50;
let p = 0.25;

ValorComDesconto(r ,p);