let ValorComDesconto = (valorReais , percentual) => {
    const desconto = valorReais * percentual;
    const valorFinal = valorReais - desconto;
    console.log(`Valor Total: ${valorReais.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} \nValor Total com desconto: ${valorFinal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
}
ValorComDesconto(300.50 , 0.25);