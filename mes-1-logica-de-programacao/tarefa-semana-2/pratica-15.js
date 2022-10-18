calculoImc = ( peso, altura) => peso / (altura * altura)

function classificacaoImc(imc){
   ;
if(imc <= 18.50)
   return "Abaixo do peso";
  
if(imc< 25)
   return "Peso normal";

if(imc < 30)
   return "Sobrepeso";
  

   return "Obesidade";
}  
function checagemImc(peso, altura) {
   const imc = calculoImc(peso, altura)
   console.log(classificacaoImc(imc))
}
checagemImc(112, 1.8)