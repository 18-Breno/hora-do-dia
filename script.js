function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 5 && hora < 12){
        //Bom Dia!
        msg.innerHTML = `Agora são ${hora} horas da manhã.`
        img.src = 'Manha.png'
        document.body.style.background ='#f9dd75'
    }else if(hora >= 12 && hora < 18){
        //Boa tarde!
        msg.innerHTML = `Agora são ${hora} horas tarde.`
        img.src = 'Tarde.png'
        document.body.style.background ='#e29831'
    }else{
        //Boa Noite!
        msg.innerHTML = `Agora são ${hora} horas da noite.`
        img.src = 'Noite.png'
        document.body.style.background ='#183a55'
        
    }
}
