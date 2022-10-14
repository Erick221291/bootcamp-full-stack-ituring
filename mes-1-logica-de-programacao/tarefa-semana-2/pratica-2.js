/*Funções com parâmetros
As funções permitem o recebimento de argumentos dos quais possibilita uma grande variedade de tratativas, 
executando um bloco de código a partir de uma entrada de dados. 
Nessa prática, iremos aplicar na prática os parâmetros de funções. Vamos lá:

Nesta prática, você vai criar e chamar 3 funções no arquivo pratica-2.js que irão informar sobre a confirmação 
de recebimento de um produto por email. Essas 3 funções deverão fazer o seguinte:

Função 1 - Receber o nome do comprador como parâmetro e exibir na tela a informação Olá, <nome do comprador>!.
Função 2 - Esta função deverá ter 3 parâmetros: nome do produto, nome de quem recebeu o produto e o endereço de
 entrega. Ela deverá exibir a seguinte informação na tela:
Fizemos a entrega do produto NomeDoProduto no endereço EnderecoDeEntrega com sucesso!

O seu produto foi recebido por: NomeDaPessoaQueRecebeuOProduto

Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos
 ajudar.
Função 3 - Esta função terá 1 parâmetro: nome de quem enviou o email. Ela deverá exibir a seguinte informação
 na tela:
Atenciosamente,
NomeDaPessoaQueEnviouOEmail
Acho que deu pra pegar o que cada uma dessas funções fazem, certo? Então, qual o nome mais apropriado para 
cada uma delas? Pense nisso, implemente as funções no arquivo pratica-2.js e por fim não esqueça de chamá-las
 para de fato exibir a mensagem de email completa na tela.*/

 function mensagem(nome){
    console.log("Olá, " + nome + "!");
    
 }
 let a = "Carlos"
mensagem(a);

function confirmacao(nomeP,nomeR,nomeE){
    console.log("Fizemos a entrega do produto "+ nomeP+ " no endereço "+nomeE+" com sucesso!" +"\n" + "O seu produto foi recebido por: " + nomeR +"!" +"\n"+ "Esperamos que você esteja contente com o produto. Caso contrário, fale conosco em até 7 dias para que possamos ajudar." );
}
let p ="Tênis";
let e = "Rua Eliza 26, centro são bernardo do campo sp";

confirmacao(p,a,e);

function saldacao(nomeEmail){
    console.log("Atenciosamente   " +"\n   "+ nomeEmail);
}
let C = "José"

saldacao(C);