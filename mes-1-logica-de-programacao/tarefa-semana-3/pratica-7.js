let estrato = [100, -20, -30, 10, -7, -21, -5];
function somaEstrato(lista){
    let soma =lista.reduce((accumulator,value) =>accumulator + value,0);
    console.log(`o saldo final da sua conta R$ ${soma}`);
}
somaEstrato(estrato);