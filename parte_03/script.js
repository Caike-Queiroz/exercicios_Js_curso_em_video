function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == ano || Number(fano.value) > ano) {
        window.alert('Verifique os dados e digite novamente !')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if  (idade >= 0 && idade < 10) {
                // Male Kid
                img.setAttribute('src' , 'img/foto-bebe-m.png') // ✔
            }
            else if (idade < 21) {
                // Male Young
                img.setAttribute('src' , 'img/foto-jovem-m.png') // ✔
            }
            else if (idade < 50) {
                // Male Adult
                img.setAttribute('src' , 'img/foto-adulto-m.png') // ✔
            }
            else {
                // Male Idoso
                img.setAttribute('src' , 'img/foto-idoso-m.png') // ✔
            }
        }else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // Female Kid
                img.setAttribute('src' , 'img/foto-bebe-f.png') // ✔
            }
            else if (idade < 21) {
                // Female Young
                img.setAttribute('src' , 'img/foto-jovem-f.png') // ✔
            }
            else if (idade < 50) {
                // Female Adult
                img.setAttribute('src' , 'img/foto-adulto-f.png') // ✔
            }   
            else {
                // Female Idosa
                img.setAttribute('src' , 'img/foto-idoso-f.png') // ✔
            }
        }
    }   res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos.`
        res.appendChild(img) // Acrescenta o elemento img
}