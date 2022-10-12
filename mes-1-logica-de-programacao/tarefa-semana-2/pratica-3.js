/*Como vimos em aula, funções também podem retornar valores. Nesta prática, você vai criar uma função que 
retorna um número aleatório entre 0 e 10000. Números aleatórios são muito úteis em jogos, simulação 
computacional, além de também ser muito importante na área de criptografia e inteligência artificial.

Utilize o arquivo pratica-3.js e implemente lá uma função que retorna um número aleatório entre 0 e 10000
Caso não saiba como gerar um número aleatório, assista a gravação da aula 3 disponibilizada no nosso Discord, 
na parte de "Funções na prática"
Em seguida, chame a função e exiba o valor retornado pela função com console.log para ver se o seu código 
está funcionando
Por fim, o de sempre, faça o commit do seu código e suba ele no seu GitHub */


    


function gerarNumeroAl() {
    const min = 0
    const max = 10000
    const numero = Math.random()*(max - min) + 1
    
    return numero;
}
 console.log(gerarNumeroAl())

