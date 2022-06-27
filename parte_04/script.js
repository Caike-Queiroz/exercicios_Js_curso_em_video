function calcular() {
    var txtn1 = document.getElementById('txtn1')
    var txtn2 = document.getElementById('txtn2')
    var txtpasso = document.getElementById('txtn3')
    var res = document.getElementById('res')
    res.innerHTML = 'Contando: <br>'

    var n1 = Number(txtn1.value)
    var n2 = Number(txtn2.value)
    var passo = Number(txtpasso.value)
    //window.alert(`n1 = ${n1}\nn2 = ${n2}\nn3 = ${passo}`)
    if (txtn1.value.length == 0 || txtn2.value.length == 0 || txtn3.value.length == 0) {
        window.alert('Identificamos que nenhum valor foi atribuído a um dos campos de texto, por favor digite um número.')

    } else if (n1 < n2) {
        // Contagem Crescente
        if (passo == 0) {
            window.alert('Passo inválido! Considerando passo = 1')
            passo = 1
        }
        for (i = n1; i <= n2; i += passo) {
            res.innerHTML += `${i} 👉 `
        }
        res.innerHTML += '🏁'
    } else {
        // Contagem Decrescente
        if (passo == 0) {
            window.alert('Passo inválido! Considerando passo = 1')
            passo = 1
        }
        for (i = n1; i >= n2; i -= passo) {
            res.innerHTML += `${i} 👉 `
        }
        res.innerHTML += '🏁'
    }   
}