let listaSeriado =["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
function buscarSeriado(p){
    let pesquisa =listaSeriado.indexOf(p);
    return pesquisa
}

function pesquisaSerie(pa){
    let n =buscarSeriado(pa);
    if(n==n)
    console.log(`Serie pesquisada se encontra na posição [${n}].`);
    if(n==-1)
    console.log(undefined);
}
pesquisaSerie("Stranger Th");