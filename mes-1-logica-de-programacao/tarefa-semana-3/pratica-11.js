let numeros=[10, 45, 123, 18, 56, 45, 32, 98, 121, 232, 1392824];

function ordenarLista(n){
    let p = n.sort((a, b) => a - b);
    console.log(p);
}
ordenarLista(numeros);