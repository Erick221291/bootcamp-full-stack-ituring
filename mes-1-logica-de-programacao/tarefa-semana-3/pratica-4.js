function exibirlista(lista){
    for( i =0; i<lista.length; i++){
        console.log(`[${i}] `+ lista[i])
    }
}

let lista =["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
exibirlista(lista);