function FullData() {
    //Capturando data e criando Array para definir o mês/Dia da semana de acordo com a lingua pt-br
    var data = new Date();
    var mes = new Array ("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro")
    var semana = new Array("Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado")
    return (semana[data.getDay()] + ", " + data.getDate() + " de " + mes[data.getMonth()] + " de " + data.getFullYear())
}

function hora() {
    //Capturando hora
    var data = new Date();
    var hora = data.getHours()
    var min = data.getMinutes()
    var sec = data.getSeconds()
    //Condição para adicionar o "0" na frente de número abaixo de 10
    if (hora<10) {
        hora = "0" + hora;
    }
    if (min<10) {
        min = "0"+min;
    }
    if (sec<10) {
        sec = "0"+sec;
    }
    return(hora + ":" + min + ":" + sec);
}
//Função para exibir relogio
function relogio(){
    //variavel para capturar os valores de função hora()
    var getHora = hora()
    //innerHTML para trocar o valor da legenda para exibir o relogio na tela
    document.getElementById("hora").innerHTML = getHora;
    }
//Variavel para atulizar a função relogio a cada 1 segundo
var timer=setInterval(relogio,1000);

function logout() {
   location.href = "/users/login"
}