

 function mensagem(nome){
    console.log(`Olá,${nome}!`);
    
 }
 let a = "Carlos"
mensagem(a);

function confirmacao(nomeP,nomeR,nomeE){
    console.log(`Fizemos a entrega do ${nomeP} no endereço ${nomeE} com sucesso! \n O seu produto foi recebido por: ${nomeR}!\nEsperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar.`);
}
let p ="Tênis";
let e = "Rua Eliza 26, centro são bernardo do campo sp";

confirmacao(p,a,e);

function saldacao(nomeEmail){
    console.log(`Atenciosamente \n  ${nomeEmail}`);
}
let C = "José"

saldacao(C);