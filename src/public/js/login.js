function login(){
    //const para pegar valores do input
    const mat = document.getElementById("mat").value;
    const senha = document.getElementById("senha").value;
    //condições para autenticação sem banco de dados.
    if ((mat==3126012)&&(senha==123)) {
        //location.href = '/users/dashboard'
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