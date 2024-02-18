function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'assets/bebeM.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'assets/jovemM.png')
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src', 'assets/Adulto.png')
            }else{
                //Idoso
                img.setAttribute('src', 'assets/Idoso.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'assets/bebeF.png')
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src', 'assets/jovemF.png')
            }else if(idade < 50){
                //Adulta
                img.setAttribute('src', 'assets/Adulta.png')
            }else{
                //Idosa
                img.setAttribute('src', 'assets/Idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.<br>`
        res.appendChild(img)
    }
}