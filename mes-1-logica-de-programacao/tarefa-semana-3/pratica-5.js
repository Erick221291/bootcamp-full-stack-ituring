let listaSeriado =["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]
function buscarSeriado(p){
    let pesquisa =listaSeriado.indexOf(p);
    return pesquisa
}

function pesquisaSerie(pa){
    let n =buscarSeriado(pa);
    if(n >= 0)
      return`Serie pesquisada se encontra na posição [${n}].`;
    if(n <= 0)
     return undefined;
}
console.log(pesquisaSerie("Breaking Bd"));