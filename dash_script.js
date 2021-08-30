function relogio(){
    //Pegando os valores para o relogio
    var data = new Date()
    var hour = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    //condições para colocar o número 0 nos valores menor que 10
    if (hour<10) {
        hour = "0"+hour;
    }
    if (min<10) {
        min = "0"+min;
    }
    if (sec<10) {
        sec = "0"+sec;
    }
    //Variavel para formatação hora:minuto:segundo
    var time = (hour + ":" + min + ":" + sec);
    //Alterando o valor da tag legend no html para exibir a hora
    document.getElementById("hora").innerHTML = time;
    /*
    var yourlegend = document.getElementById("hora");
    yourlegend.innerHTML = time;
    */
    }
    //variavel para chamar a função relogio a cada 1 segundo
    var timer=setInterval(relogio,1000);

function logout() {
    document.location = "index.html"
}