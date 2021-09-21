function login(){
    //const para pegar valores do input
    const mat = document.getElementById("mat").value;
    const senha = document.getElementById("senha").value;
    //condições para autenticação sem banco de dados.
    if ((mat==3126012)&&(senha==123)) {
        document.location = 'dashboard.html'
    }
    else if (mat=="") {
        alert("Digite sua matrícula")
    }
    else if (senha=="") {
        alert("Digite sua senha")
    }
    else {
        alert("Matrícula ou senha incorretos")
    }
}
function recu_pass() {
    //document.location = 'dashboard.html'
    //Ainda não programado
    alert("funcionando")
}

function relogio(){
    //capturando os valores para o relogio
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