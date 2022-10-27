let listaSeriados=["Breaking Bad", "Game of Thrones", "Stranger Things", "Chernobyl", "Dexter", "The Last Dance", "This is Us"]

let procuraItemEmLista = (lista, valor) => {
    let indice = undefined
    lista.forEach(function(lista,i) {

        if (lista == valor)
                   indice = i;

            });
            return indice
}
console.log(procuraItemEmLista( listaSeriados,"Game of Thrones"))