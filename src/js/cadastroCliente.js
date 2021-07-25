const button1 = document.getElementById('confirmarCadastroCliente');
const clientes = [];
const buttonVoltarCliente = document.getElementById('voltarCadCliente');

class Pessoa {
    constructor(nome, email, rua, numeroResidencia, bairro, cidade, estado, telefone){
        this.nome = nome;
        this.email = email;
        this.rua = rua;
        this.numeroResidencia = numeroResidencia;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
        this.telefone = telefone;
    }

}

function confirmaCadastro(e) {
    e.preventDefault();
    let nome = document.getElementById('nomeCliente').value;
    let email = document.getElementById('email').value;
    let rua = document.getElementById('rua').value;
    let numeroResidencia = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let telefone = document.getElementById('telefone').value;
    
    if (nome != "" && email != "" && rua != "" && numeroResidencia != "" && bairro != "" 
    && cidade != "" && estado != "" && telefone != ""){
        let convertNome = JSON.stringify(nome);
        localStorage.setItem('nomeCliente', convertNome);
        
        let convertEmail = JSON.stringify(email);
        localStorage.setItem('email', convertEmail);

        let convertRua = JSON.stringify(rua);
        localStorage.setItem('rua', convertRua);
        
        let convertNumResidencia = JSON.stringify(numeroResidencia);
        localStorage.setItem('numResidencia', convertNumResidencia);

        let convertBairro = JSON.stringify(bairro);
        localStorage.setItem('bairro', convertBairro);

        let convertCidade = JSON.stringify(cidade);
        localStorage.setItem('cidade', convertCidade);

        let convertEstado = JSON.stringify(estado);
        localStorage.setItem('estado', convertEstado);

        let convertTelefone = JSON.stringify(telefone);
        localStorage.setItem('telefone', convertTelefone);

        let novoCliente = new Pessoa(convertNome, convertEmail, convertRua, convertNumResidencia, 
            convertBairro, convertCidade, convertEstado, convertTelefone);
        
        clientes.push(novoCliente);
        
        localStorage.setItem('clientes', JSON.stringify(clientes));

        document.getElementById('formCliente').reset();

    }else{
        if(nome == ""){
            alert("Campo NOME COMPLETO não preenchido!")
        }else if(email == ""){
            alert("Campo E-MAIL não preenchido!")
        }else if(rua == ""){
            alert("Campo RUA não preenchido!")
        }else if(numeroResidencia == ""){
            alert("Campo NÚMERO DA RESIDÊNCIA não preenchido!")
        }else if(bairro == ""){
            alert("Campo BAIRRO não preenchido!")
        }else if(cidade == ""){
            alert("Campo CIDADE não preenchido!")
        }else if(estado == ""){
            alert("Campo ESTADO não preenchido!")
        }else if(telefone == ""){
            alert("Campo TELEFONE não preenchido!")
        }
    }
}

function voltarCliente(e){
    e.preventDefault();
    window.location.href = '../../index.html';
}

button1.addEventListener('click', confirmaCadastro);

buttonVoltarCliente.addEventListener('click', voltarCliente);