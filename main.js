function carregar(){
    var tittle = document.getElementById('titulo')
    var image = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    tittle.innerHTML = `Agora são ${hora} horas`
    var aga1 = document.getElementsByTagName('h1')[0]
    var futer = document.getElementsByTagName('footer')[0]

    if(hora >= 0 && hora <= 12){
        aga1.style.color = 'black'
        futer.style.color = 'black'
        image.src = 'manhã.jpg'
        document.body.style.background = '#e2cd9f'
    }
    else if (hora >= 12 && hora <= 18){
        aga1.style.color = 'black'
        futer.style.color = 'black'
        image.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    }
    else{

        image.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}
