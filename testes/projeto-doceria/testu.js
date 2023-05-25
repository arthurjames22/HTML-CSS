const list = [10, 20, 1, 4 ,2]

function somarLista(cole) {
    var soma = 0
    for(var i in cole) {
        if (cole[i] > 9) {
        soma += cole[i] 
    }
    } return soma
}
console.log(somarLista(list))