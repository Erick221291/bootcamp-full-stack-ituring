let CalculoDeIMC = function(altura , peso){
    let = alturaMetros =altura / 100;
    let IMC = peso / (alturaMetros*alturaMetros);

    if(IMC <= 18.50){
    console.log("Abaixo do peso");
   
}else if(IMC >= 18.50 && IMC <= 25){
    console.log("Peso normal");
   
}else if(IMC >= 25 && IMC <= 30){
    console.log("Sobrepeso");
   
}else if(IMC >= 30){
        console.log("Obesidade");
    }
   }
   CalculoDeIMC(180,112);
