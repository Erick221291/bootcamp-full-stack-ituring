function numeroPrimo(numero){
    let primo = true
    for(let contador = 2;contador < numero;contador++){
       if(numero % contador === 0){
        primo = false
        console.log("false")
       break;
    }         
    }
    if(primo == true){
        console.log("true");
        
    }
}
numeroPrimo(17);
numeroPrimo(7);
numeroPrimo(8);
numeroPrimo(5);
numeroPrimo(23);
numeroPrimo(15);
numeroPrimo(1500450271);