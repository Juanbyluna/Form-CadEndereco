'use strict';//moodo restrito

//função para limpar formulario
const limparFormulario = (endereco) => {
    document.getElementById('rua').value='';
    document.getElementById('bairro').value='';
    document.getElementById('cidade').value='';
    document.getElementById('estado').value='';

}