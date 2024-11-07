function salvarDados() {
    let CPF = document.getElementById('txtCPF').value;
    let NOME = document.getElementById('txtNOME').value;
    let FONE = document.getElementById('txtFONE').value;

    let dadosUsuario = { NOME: NOME, FONE: FONE };

    if (localStorage.getItem(CPF)) {
        alert('Já usaram esse cpf')

    }

    else {
        localStorage.setItem(CPF, JSON.stringify(dadosUsuario));

    }
}

function mostrarDados() {
let CPF = document.getElementById('txtCPF').value;
let dadosSalvo = localStorage.getItem(CPF);

if(!dadosSalvo){
    alert('Não há nenhum registro');
}
else{
    let usuario = JSON.parse(dadosSalvo);
    document.getElementById('retornoDados').innerText = 
    'CPF' + CPF + 'NOME' + usuario.NOME + 'FONE:' + usuario.FONE;
}


}

function limparDados() {
    let CPF = document.getElementById('txtCPF').value;
    localStorage.removeItem(CPF);
    alert('Apagou');
}