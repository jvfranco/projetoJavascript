
const conexao = 'http://127.0.0.1:8080/api/f1';
var xhr = new XMLHttpRequest();

var botao = document.querySelector('#carregar');

botao.addEventListener('click', () => {
    carregarTabela();
});

var botaoCadastrar = document.querySelector('#cadastrar');

botaoCadastrar.addEventListener('click', () => {
    var form = document.querySelector('#formulario');
    form.classList.remove('invisivel');
});

var botaoConfirmar = document.querySelector('#confirmar');

botaoConfirmar.addEventListener('click', () => {
    var form = document.querySelector('#form');
    var section = document.querySelector('#formulario');
    section.classList.add('invisivel');

    xhr.open('POST', conexao);
    xhr.setRequestHeader("Content-Type", "application/json");
    var func = obterFuncionario(form);
    xhr.send(JSON.stringify(func));

    xhr.addEventListener('load', () => {
        if(xhr.status == 201) {
            adicionarFuncionarioNaTabela(JSON.parse(xhr.responseText));
        }
    });    
    form.reset();
});

function carregarTabela () {
    var tabela = document.querySelector('#tabela-funcionarios');
    tabela.innerHTML="";
    xhr.open('GET', conexao);

    xhr.addEventListener('load', function () {
        if (xhr.status == 200) {
            var resposta = xhr.responseText;
            var funcionarios = JSON.parse(resposta);
            funcionarios.items.forEach(funcionario => {
                adicionarFuncionarioNaTabela(funcionario);
            })
        }
    });

    xhr.send();
};


