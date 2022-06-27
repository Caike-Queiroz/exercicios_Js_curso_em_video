var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.getElementById('res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if  (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' // Quando adicionar um elemento, ele limpará a string que estava se referindo ao caso anterior (já que o vetor foi alterado).
    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
    num.value = '' // Serve para apagar o valor que havia sido colocado no input.
    num.focus()   // Serve para focar na caixa do input.
}
function finalizar() {
    if(valores.lenght == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        var total = valores.length
        var maior = valores[0]
        var menor = valores[0]
        var soma = 0
        var media = 0
        for (var pos in valores) {
            soma += valores[pos] 
            if (valores[pos] > maior) {
                maior = valores[pos]
            } 
            else if (valores[pos] < menor){
                menor = valores[pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, o vetor possui <strong>${total}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior número do vetor é <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor número do vetor é <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>A soma entre todos os valores contidos no vetor resultou em <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p> A média dos valores digitados é ${media}</p>`
    }   
}