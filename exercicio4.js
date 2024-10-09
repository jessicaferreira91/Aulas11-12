function novoArray(numeros = []) {
    const retorno = []
    const primeiroNumero = numeros[0] / 2
    const ultimoNumero = numeros[numeros.length-1]/2
    retorno.push(ultimoNumero)
    retorno.push(primeiroNumero)
    return retorno
}

let x = novoArray([12,10,15,16,8,21])

console.log(x)