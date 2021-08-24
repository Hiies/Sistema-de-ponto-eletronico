function login(){
    const mat = document.getElementById("mat").value;
    const senha = document.getElementById("senha").value;
    if ((mat==3126012)&&(senha==123)) {
        alert("Ok")
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
    alert("funcionando")
}